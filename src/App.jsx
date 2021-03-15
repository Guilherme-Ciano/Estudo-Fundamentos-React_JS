import React from 'react'
import './App.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilho from './components/ComFilho'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default props =>
    <div className="App">
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>

        <Card titulo="#02 - Primeiro Parametro">
            <ComParametro Titulo="Este é o Titulo"  Subtitulo="Esse é o subtitulo"></ComParametro>
        </Card>

        <Card titulo="#03 - Primeiro Parametro com Filho">
            <ComFilho>
                <ul>
                    <li>Filho 1</li>
                    <li>Filho 2</li>
                    <li>Filho 3</li>
                    <li>Filho 4</li>
                </ul>
            </ComFilho>
        </Card>

        <Card titulo="#04 - Primeiro Card">
            Conteudo
        </Card>       
        
        <Card titulo="#05 - Repetição de Produtos">
            <Repeticao />
        </Card>

        <Card titulo="#06 - Condicional">
            <Condicional numero={10} />
        </Card>

        <Card titulo="#07 - Condicional com If">
            <CondicionalComIf numero={13} />
        </Card>
    </div>
