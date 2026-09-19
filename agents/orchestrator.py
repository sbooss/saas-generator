from ui_agent import UIAgent
from ux_agent import UXAgent
from scroll_agent import ScrollAgent
from typography_agent import TypographyAgent
from qa_agent import QAAgent

class Orchestrator:
    """Orquestrador que coordena todos os agentes especializados"""
    
    def __init__(self):
        self.agents = {
            'ui': UIAgent(),
            'ux': UXAgent(),
            'scroll': ScrollAgent(),
            'typography': TypographyAgent(),
            'qa': QAAgent()
        }
        self.log = []
    
    def process(self, config):
        """Processa a geracao da landing page com todos os agentes"""
        self.log = []
        self._log("Orquestrador iniciado")
        
        self._log("Fase 1: Analise dos agentes")
        analysis = {}
        for name, agent in self.agents.items():
            if name == 'qa':
                continue
            if name == 'ux':
                analysis[name] = agent.analyze("", config)
            elif name in ['scroll', 'typography']:
                analysis[name] = agent.analyze("")
            else:
                analysis[name] = agent.analyze(config)
            self._log(f"  {agent.name}: {len(analysis[name].get('issues', []))} problemas, {len(analysis[name].get('suggestions', []))} sugestoes")
        
        return {
            'analysis': analysis,
            'log': self.log
        }
    
    def enhance_html(self, html, config):
        """Aplica melhorias de todos os agentes no HTML"""
        self._log("Fase 2: Melhoria do HTML")
        
        enhanced = html
        
        enhanced = self.agents['ui'].enhance_html(enhanced, config)
        self._log("  UI Agent: Melhorias visuais aplicadas")
        
        enhanced = self.agents['ux'].enhance_html(enhanced, config)
        self._log("  UX Agent: Elementos de conversao adicionados")
        
        enhanced = self.agents['scroll'].enhance_html(enhanced, config)
        self._log("  Scroll Agent: Animacoes aplicadas")
        
        enhanced = self.agents['typography'].enhance_html(enhanced, config)
        self._log("  Typography Agent: Tipografia melhorada")
        
        return enhanced
    
    def validate(self, html, config):
        """Valida a pagina final com o agente QA"""
        self._log("Fase 3: Validacao QA")
        
        results = self.agents['qa'].validate(html, config)
        report = self.agents['qa'].generate_report(results)
        self._log(report)
        
        return {
            'results': results,
            'report': report,
            'log': self.log
        }
    
    def _log(self, message):
        self.log.append(message)
        print(f"[Orchestrator] {message}")

def main():
    """Funcao principal para uso externo"""
    import json
    import sys
    
    config = json.loads(sys.stdin.read())
    
    orchestrator = Orchestrator()
    
    analysis = orchestrator.process(config)
    
    print(json.dumps({
        'status': 'ok',
        'analysis': analysis['analysis'],
        'log': analysis['log']
    }, ensure_ascii=False))

if __name__ == '__main__':
    main()
