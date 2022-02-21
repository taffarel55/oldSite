<!--
title: "Blog"
link: "/blog"
author: taffarel55
date: 22-10-2012
-->

# Texto Introdutório 02 - Conversão

**Aluno:** Maurício Taffarel
**Data:** 26/11/2020
**Professor:** Kléber Freire

## As curvas V

Sabe-se que a excitação de uma máquina síncrona permite com que ela atue como fornecedor ou consumidor de potência reativa indutiva, ou seja, é possível alterar o fator de potência de uma máquina síncrona através da excitação da sua corrente de campo, a tabela abaixo mostra as possibilidades de sub-excitação e sobre-excitação para motor e para o gerador:

<center>

|            Excitação            |      Gerador      |       Motor       |
| :-----------------------------: | :---------------: | :---------------: |
| $I_{f}>I_{fN}$ (sobre-excitado) | $I_{a}$ atrasada  | $I_{a}$ adiantada |
|  $I_{f}<I_{fN}$ (sub-excitado)  | $I_{a}$ adiantada | $I_{a}$ atrasada  |

###### Tabela 1 - Efeito da excitação numa máquina síncrona

</center>

Sabemos que tanto a sobre-excitação quanto a sub-excitação de uma máquina, irá fazer com que ela troque energia reativa com a rede, por isso o módulo da corrente de armadura da máquina pode aumentar se o fator de potência diminuir, por isso é conveniente visualizar isto numa curva, onde para cada corrente de campo, temos uma corrente de armadura da máquina ($I_{f}\times I_{a}$):

<center>

<img width="320" src="https://i.imgur.com/y3kP2NU.png"/>

###### Figura 1: Curvas V de uma máquina síncrona

</center>

Podemos perceber neste gráfico que existe uma corrente de campo $I_{f}$ cujo fator de potência é unitário, tomando esta mesma corrente de campo $I_{f}$ para uma curva destes gráficos (para uma potência de saída em $pu$), nota-se que, para uma corrente de campo maior, tem-se um aumento na corrente de armadura, assim como para uma corrente de campo menor, tem-se um aumento na corrente de armadura também.

Isso se deve ao fato de que aumentar ou diminuir a corrente de campo $I_{f}$ neste ponto de operação da máquina, significa sobre-excitar ou sub-excitar a máquina, ou seja, a máquina síncrona passa a fornecer ou solicitar potência reativa da rede como podemos ver da Tabela 1.

Esta nova potência aparente aumenta a corrente de armadura, por isso para uma mesma potência (representado em uma curva no gráfico 1), temos esse formato que lembra um **V**, daí o nome: _Curvas V_

As linhas tracejadas da figura 1 representam regiões de operação à um fator de potência constante, nesta figura podemos ver as linhas tracejadas para $FP=0.8$ indutivo, $FP=0.8$ capacitivo e $FP=0.1$.

Pontos imediatamente à direita desta linha correspondem a uma sobre-excitação, e pontos imediatamente à esquerda a uma sub-excitação.

Embora esta curva seja de um gerador síncrono, as curvas V para um motor síncrono são muito parecidas, desprezando a resistência de armadura elas só teriam de diferença a região de fator de potência indutivo e capacitivo seriam invertidas. Isso se deve ao fato do motor síncrono possuir um comportamento do $FP$ oposto ao gerador síncrono, como pode ser observado na tabela 1.

#### Referências:

CHAPMAN, Stephen J. Electric Machinery Fundamentals. 2nd ed., Nova Iorque, McGraw Hill, 2001.

UMANS, Stephen D. Máquinas elétricas de Fitzgerald e Kingsley [recurso eletrônico] / Stephen D. Umans ; tradução: Anatólio Laschuk. – 7. ed. – Dados eletrônicos. – Porto Alegre : AMGH, 2014.

###### tags: `Blog`,`UFBA`
