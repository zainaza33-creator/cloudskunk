import React, { useEffect, useRef } from 'react';

const NodeNetwork = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    class NodeNetworkSystem {
      constructor(container) {
        this.container = container;
        this.nodes = [];
        this.lines = [];
        this.nodeCount = 25;
        this.lineCount = 40;
        
        this.init();
      }
      
      init() {
        this.createNodes();
        this.createLines();
        this.animate();
      }
      
      createNodes() {
        for (let i = 0; i < this.nodeCount; i++) {
          const node = document.createElement('div');
          node.className = 'node';
          
          const size = Math.random() * 8 + 3;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          
          node.style.width = `${size}px`;
          node.style.height = `${size}px`;
          node.style.left = `${x}vw`;
          node.style.top = `${y}vh`;
          node.style.opacity = Math.random() * 0.8 + 0.3;
          
          this.nodes.push({
            element: node,
            x, y, size,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2
          });
          
          this.container.appendChild(node);
        }
      }
      
      createLines() {
        for (let i = 0; i < this.lineCount; i++) {
          const line = document.createElement('div');
          line.className = 'line';
          line.style.height = '1px';
          line.style.opacity = '0';
          
          this.lines.push({
            element: line,
            source: null,
            target: null,
            opacity: 0
          });
          
          this.container.appendChild(line);
        }
        this.updateLines();
      }
      
      updateLines() {
        this.lines.forEach(line => {
          line.source = null;
          line.target = null;
          line.element.style.opacity = '0';
        });
        
        let lineIndex = 0;
        for (let i = 0; i < this.nodes.length && lineIndex < this.lines.length; i++) {
          for (let j = i + 1; j < this.nodes.length && lineIndex < this.lines.length; j++) {
            const nodeA = this.nodes[i];
            const nodeB = this.nodes[j];
            const distance = Math.sqrt(
              Math.pow(nodeA.x - nodeB.x, 2) + 
              Math.pow(nodeA.y - nodeB.y, 2)
            );
            
            if (distance < 20) {
              const line = this.lines[lineIndex];
              line.source = nodeA;
              line.target = nodeB;
              line.opacity = 1 - (distance / 20);
              lineIndex++;
            }
          }
        }
      }
      
      animate() {
        this.nodes.forEach(node => {
          node.x += node.vx;
          node.y += node.vy;
          
          if (node.x <= 0 || node.x >= 100) node.vx *= -1;
          if (node.y <= 0 || node.y >= 100) node.vy *= -1;
          
          node.x = Math.max(0, Math.min(100, node.x));
          node.y = Math.max(0, Math.min(100, node.y));
          
          node.element.style.left = `${node.x}vw`;
          node.element.style.top = `${node.y}vh`;
        });
        
        this.lines.forEach(line => {
          if (line.source && line.target) {
            const dx = line.target.x - line.source.x;
            const dy = line.target.y - line.source.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            
            line.element.style.width = `${distance}vw`;
            line.element.style.left = `${line.source.x}vw`;
            line.element.style.top = `${line.source.y}vh`;
            line.element.style.transform = `rotate(${angle}deg)`;
            line.element.style.opacity = line.opacity;
          }
        });
        
        if (Math.random() < 0.02) {
          this.updateLines();
        }
        
        this.animationFrame = requestAnimationFrame(() => this.animate());
      }
      
      cleanup() {
        if (this.animationFrame) {
          cancelAnimationFrame(this.animationFrame);
        }
        if (this.container) {
          this.container.innerHTML = '';
        }
      }
    }

    const network = new NodeNetworkSystem(containerRef.current);
    
    return () => {
      network.cleanup();
    };
  }, []);

  return <div id="node-container" ref={containerRef} className="fixed inset-0 pointer-events-none z-0"></div>;
};

export default NodeNetwork;