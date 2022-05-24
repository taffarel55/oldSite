<!--
title: Projeto de amplificador de áudio
link: /blog/electronic/audio-amplifier
categoryTitle: Eletrônica
categoryLink: /blog/electric-machines
tags: [Computação, Matemática, Desafio]
authorNick: taffarel55
authorName: Maurício Taffarel
authorId: 18634201
description: Esta é uma descrição em português
date: "2012/10/22"
time: 14
-->

# Projeto Amplificador de Áudio

**Disciplina:** Eletrônica Analógica
**Aluno:** Maurício Taffarel Barreto da Silva
**Professor:** Robson Nunes de Lima


# Tabela de conteúdos

[TOC]

# Introdução

Este trabalho tem como finalidade projetar um amplificador de áudio, para excitar um fone de ouvido Sennheiser HD280 Pro com o sinal vindo de um microfone. Será utilizando 3 estágios de amplificadores. Os dois primeiros estágios serão para ganho de tensão, e o terceiro para um ganho de potência. 

<center>
<img src="https://i.imgur.com/HlqEleT.png"/>

Figura 1 - Topologia do amplificador
</center>


Para este projeto devemos se atentar a alguns detalhes, um circuito amplificador pode gerar distorções harmônicas e por isso devemos ter bastante cuidado para eliminá-las no projeto. Além disso, é importante observar potência dissipada total pelo circuito, pois energia é um fator importante para a eficiência energética do amplificador. 

Para um maior detalhamento de como foi realizado e projetado o circuito, os estágios do circuito serão explicados na ordem inversa. Esta foi a ordem que o circuito foi projetado.

# Requisitos do projeto

Os dispositivos para qual o nosso amplificador irá funcionar serão os seguintes:

**Microfone:**
- Impedência interna do microfone: $350 \Omega$
- Frequência do sinal de áudio: $40Hz$ a $18kHz$
- A mínima impedância de carga do microfone: $1k \Omega$
- A amplitude do sinal: $2mV$~$20mV$
- Balanceada com conector: $XLR-3$
 
**Carga (Fone de ouvido Sennheiser HD280 Pro):** 
- Impedância de entrada: $64 \Omega$.

Temos disponível no projeto do nosso circuito:

**Tensão de alimentação:**
- -3V
- +5V

**Transistores disponíveis:**
- BC547-npn
- BC557-pnp
- BF998 (MOS-depleção, nxp)

E por fim, os requisitos de projeto são:

- DH3: $< 1\%$
- Potência média de saída: $115mW$

Além disso, é importante polarizar os transistores  baseados em espelho e cargas de correntes visando reduzir a potência total consumida, aumentando a eficiência do circuito. A realimentação também será usada a fim de reduzir a distorção harmônica total na tensão de saída, para este projeto, irei considerar a distorção harmônica de terceira ordem, como foi sugerido pelo professor.

Além disso, foi observado durante a realização do projeto que é difícil obter uma potência de saída acima de $90mW$. Contudo, neste projeto estamos mais interessados em baixa distorção de terceira ordem, por isso será considerado pelo menos uma potência de saída de $100mW$, afinal, ainda devemos ter um circuito que consiga excitar o fone de ouvido. 

A disponibilidade de fontes de tensão, nesse projeto, limitou a excursão de saída necessária para se obter uma potência acima de $108mW$, isso foi observado realizando as devidas análises nos transistores nos limites da região de saturação. Por isso, neste trabalho será considerado a potência de $100mW$ que ainda precisará trabalhar nos limiares de operação. 

# Análise dos estágios do projeto 

## Amplificador de potência (Coletor comum)
A topologia utilizada neste estágio foi a topologia coletor comum, pois apresenta um ganho de tensão próximo da unidade e um ganho de corrente característico do semicondutor ($h_{FE}$). Assim, utilizando esta topologia, um sinal de entrada com uma alimentação mais fraca pode ser utilizado para alimentar uma resistência menor no terminal de saída. Este é o caso do nosso circuito onde tempos uma impedância de $64 \Omega$ do fone de ouvido. 

A topologia foi utilizada no modo classe A, com uma fonte de corrente ativa ao invés da utilização de um resistor no emissor, possibilitando, assim uma melhoria na linearidade e na eficiência.

<center>
<img src="https://i.imgur.com/Ge6rBhh.png" />

*Figura 2 - Topologia coletor comum*
</center>

Fala de dispositivos ativos e tal, tensão de alimentação e pam, nem sempre o projetista tem disponível um nível de tensão e tal, por este motivo vou fazer ai o trabalho considerando uma potência de saída menor, não muito para não ter um circuito que não possa excitar um fone de ouvido.

#### O cálculo das tensões e das correntes de polarização e definição do circuito

Primeiramente, deve-se obter a tensão final para a carga:

$$P_{med} = \frac{\Re\{V\times I^\ast\}}{2} = \frac{\Re\{V\times \frac{V^\ast}{Z_{L}}\}}{2} = \frac{\left|V\right|^{2}}{2Z_{L}}$$

$$\left|V\right|=\sqrt{2PZ_{L}} = \sqrt{2\cdot115\cdot10^{-3}\cdot64}=3.83V$$

A corrente exigida pela carga é de:

$$I_{L}=\frac{V}{Z_{L}}=\frac{3.83}{64}=0.05984375\simeq 60mA$$

A corrente de polarização utilizada deverá ser maior ou igual do que esta corrente, pois o nosso transistor não tem a capacidade de produzir uma corrente negativa. Para isso, utilizaremos $I_{CQ}=60mA$.

Como dito anteriormente, precisamos criar um espelho de corrente que vai polarizar o transistor com esta corrente desejada. Antes disso, precisamos obter a curva característica do transistor que vamos utilizar, nesse caso o **BC547-npn**:

<center>
<img src="https://i.imgur.com/XOZe3Wp.png">

*Figura 3 - Curva característica do transistor BC547-npn* - $I_C \times V_{BE}$ 
</center>

O valor obtido de tensão para uma corrente de $60mA$ é de $V_{BE}=0.8985V$. Sabendo disso, podemos construir finalmente a fonte de corrente utilizando a topologia abaixo:

<center>

![](https://i.imgur.com/KZm43Ej.png)

*Figura 4 - Topologia do espelho de corrente simples*
</center>

Como sabemos o valor de $V_{BE}$, podemos obter o valor de resistência $R$:

$$R=\frac{0-\left(V_{BE}-3\right)}{I_{C}}$$
$$R=35.0554432913 \Omega$$

Assim, o circuito ficou desta forma:

<center>

![](https://i.imgur.com/VgFdIy7.png)

*Figura 5 - Circuito após a fonte de corrente*
</center>

Para o cálculo dos resistores $R_1$ e $R_2$, foi considerado valores para que apresentassem uma razoável impedância de entrada e baixo consumo por corrente estática:

A tensão $V_{EQ}$ não pode ser menor do que $V_B$ do espelho de corrente, pois, os transistores do espelho de corrente deixariam de operar na região ativa, assim:
$$V_{EQ}+V_{min}\ge V_{BE}+(-3)$$
$$V_{EQ}-3.815\ge0.8985-3$$
$$V_{EQ}\ge0.8985-3+3.815=1.7135$$

Assim, podemos determinar o $R_1$ e o $R_2$, para um menor consumo, e pensando também na impedância de entrada deste estágio:

Sabendo que para este $V_{BE}$, a corrente $I_B=394\cdot10^{-6}$, escolhi a corrente que passa em $R_1$ e $R_2$ muito pequena, praticamente a corrente que exigida por este ramo, é a corrente de base do TBJ, então, arbitrariamente, temos: 
$$I_{1}=\frac{I_{CQ}}{151.935}=394.562767245\mu A$$

De modo que, a corrente que vai para o $R_2$ é:
$$I_{2}=I_{1}-I_{B}=562.76724526nA$$

Assim, calculamos $R_1$:
$$R_{1}=\frac{V_{CC}-V_{B}}{I_{1}}=6052.26898795\Omega$$

E também o $R_2$:
$$R_{2}=\frac{V_{B}}{I_{2}}=4641350.43748\Omega$$

Assim, concluimos os valores dos componentes restantes:

<center>

![](https://i.imgur.com/fAed1KD.png)
Figura 6 - Malha de entrada
</center>

E assim, com todos os valores dos componentes encontrados, podemos determinar o circuito completo:

<center>

![](https://i.imgur.com/WF8OFYN.png)
Figura 7 - Circuito completo

</center>

Agora podemos comparar os valores teóricos com os valores obtidos via simulação:

|          |    Teórico     |    Simulado    | Erro (%) |
|:--------:|:--------------:|:--------------:|:--------:|
| $I_{C}$  |     $60mA$     |    $59.7mA$    | $0.5\%$  |
| $I_{1}$  | $394.563\mu A$ | $391.937\mu A$ | $0.66\%$ |
| $I_{2}$  |  $562.77n A$   |  $566.191n A$  | $0.61\%$ |
| $V_{EQ}$ |   $1.7135V$    |    $1.73V$     | $0.96\%$ |
| $V_{BQ}$ |    $2.612V$    |    $2.63V$     | $0.69\%$ |

A corrente e as tensões de polarização obtidos via simulação estão de acordo com o esperado na teoria.

#### Resultados da simulação

O circuito simulado apresentou o seguinte resultado:

<center>

![](https://i.imgur.com/yAb6AxK.png)


Figura 8 - Resultado final da simulação no ADS 
</center>

A impededância de entrada pôde ser obtida por simulação, realizando uma simulação nesse estágio individualmente, observando os resultados da simulação, na figura 8, temos que a impedância de entrada foi de aproximadamente $Z_{in} = 2.8k \Omega$. Esta impedância será importante na determinação do ganho do estágio anterior.

$$Z_{in}=2.8k \Omega$$

O Ganho de de corrente obtido foi aproximadamente $40$, como o ganho de tensão é próximo da unidade, este ganho de corrente reflete num ganho de potência, que é a finalidade desse estágio.

$$A_{i}=40.717$$

A distorção harmônica total foi baixa, ficando em cerca de $2%$, isso se deve ao fato de eu estar trabalhando muito próximo dos limites de operação do meu circuito, tentando garantir minimamente o parâmetro de projeto que é a potência de saída.

$$DHT\approx 2\%$$

> Os estágios tentarão eliminar um pouco a distorção de terceira ordem.

De posse da impedância de entrada $Z_{in}=2.8k\Omega$ e da impedância de saída $Z_{out}=64\Omega$ pode-se calcular o valor dos capacitores que vão oferecer um bloqueio DC do circuito, do sinal de entrada e do seinal de saída. Para isso iremos considerar a menor frequência de operação, de $40Hz$ e um fator de $100$:

$$C>\frac{1}{2\pi40\cdot\frac{64}{10}}=621\mu F$$

Por isso, escolherei o capacitor $C=630\mu F$. Nas outras regiões onde é necessário o uso de um capacitor, a impedância de entrada (ou de saída) é bem menor do que esta impedância de $64\Omega$, então os demais capacitores terão uma capacitância menor, serão menores, gastando menos espaço no nosso circuito. O procedimento para a determinação dos outros capacitores é o mesmo, por isso, serão omitidos neste relatório.

#### Potência média consumida
Uma vez polarizado o transistor, podemos encontrar a potência total dissipada via simulação:

$P_{dis}=P_{R1}+P_{R2}+P_{TBJ}+P_{CargaAtiva}$
$P_{dis}=P_{R1}+P_{R2}+P_{TBJ}+P_{R3}+P_{TBJ1}+P_{TBJ1}$
$P_{dis}=R_{13}\cdot I_{13}^{2}+R_{23}\cdot I_{23}^{2}+\left(5-V_{EQ3}\right)\cdot I_{3}+R_{3}\cdot I_{3}^{2}+\left(V_{EQ3}-\left(-3+V_{BE3}\right)\right)I_{3}+V_{BE3}I_{3}$
$P_{dis}=0.606507337496\approx 600mW$

A potência média consumida nesse estágio, considerando a potência do espelho de corrente foi de $600mW$. A maior parte da potência, está sendo utilizada para o pleno funcionamento da carga ativa e do transistor.

#### Diagramas temporais vBE(t) e vCE(t)

Os sinais estão apresentados a seguir, pelo fato de estar trabalhando com o transistor no limite de operação da excursão do sinal, a tensão $V_{BE}(t)$ apresentou certa distorção harmônica. 

|             $V_{BE}(t)$              |             $V_{CE}(t)$              |
|:------------------------------------:|:------------------------------------:|
| ![](https://i.imgur.com/gh2J0wD.png) | ![](https://i.imgur.com/aJOih2X.png) |
                                
## Amplificador de tensão (Cascode)

O cascode é uma topologia baseada em dois transistores, um na configuração emissor comum, e o outro estágio, uma base comum. Esta configuração, permite uma boa isolação entre saída e entrada $S_{21}\rightarrow 0$, uma alta impedância de entrada além de poder operar uma alta faixa de frequências.

<center>

![](https://i.imgur.com/aLZ6Up5.png)
Figura 9 - Topologia cascode

</center>

O transistor utilizado é o BF998, este dispositivo é amplamente usado em aplicações VHF e UHF com alimentação típica de 12V, geralmente usado em comunicações. 

<center>

![](https://i.imgur.com/sQFlED9.png)
*Figura 10 - Representação de um dispositivo dual gate N-MOSFET*
</center>

O dispositivo pode ser usado como cascode, como no datasheet não possui informações típicas das características do transistor para a faixa de sinais de áudio, a estratégia utilizada foi obter as curvas características através da simulação no ADS.

A topologia utilizada para levantar as curvas foi a seguinte:

<center>

![](https://i.imgur.com/pyXw7uL.png)
*Figura 11 - Topologia do segundo estágio*

</center>

#### Obtenção das curvas características do transistor

Durante a obtenção das curvas, foi possível perceber que o dispositivo, apresenta a possibilidade, através do **Gate 2**, o controle de potência de saída do circuito, podendo ser utilizado em diversas aplicações como por exemplo para construção de mixers em RF. 

As curvas obtidas através de simulação estão discriminadas a seguir:

<center>

![](https://i.imgur.com/WCNkgED.png)

*Figura 11 - Curvas características do BF998*

</center>

Através da figura 11, é possível perceber que a transcondutância é maior quanto maior for o $V_{G2}$, ponto de polarização deste gate foi escolhido se beneficiando disto. Outro parâmetro que foi levando em consideração é a corrente mínima exigida pela carga, para não haver a saturação:

$$I_{out2}=\frac{V_{3}}{Z_{3}}=1.37mA$$

#### Obtenção tensões e das correntes de polarização e definição do circuito

Considerando isso, a excursão do sinal e a corrente estática mínima dentro de uma região linear na curva, o ponto de polarização escolhido foi $V_{GS2}=4.52V$ e $V_{GS1Q}=-0.13V$, a característica para esse ponto de polarização está mostrado na figura a seguir:

<center>

![](https://i.imgur.com/Mf666kD.png)

*Figura 12 - Curvas características para o ponto de polarização escolhido*

</center>

Através de uma simulação AC para este ponto de polarização foi obtido a curva do ganho de circuito aberto:

<center>

![](https://i.imgur.com/umHcK4T.png)

*Figura 13 - Ganho de tensão em circuito aberto para o ponto de polarização escolhido*

</center>

Através do ganho de malha aberta, conhecendo a impedância de carga vista pelo cascode, pode-se calcular a impedância de saída do circuito:

$$R_{ds}=\frac{G_{O}}{g_{m}}=402.679782761\Omega$$

A transcondutância $g_{m}$ obtida via simulação através das curvas levantadas na figura 11 foi de aproximadamente $28.54mS$, mas também pode ser obtida da seguinte maneira:

$$g_{m}=\frac{2I_{D}}{V_{GS1}-V_{TH}}=0.0283853333333\approx 28.39mS$$

E assim, calcula-se o ganho do circuito:

$$G_{v}=-g_{m}\left(R_{ds}//R_{L}\right)=g_{m}\frac{R_{ds}\cdot2800}{R_{ds}+2800}=10.047$$

O ganho deste estágio foi projetado para trabalhar aproximadamente neste valor, por isto a polarização acima foi escolhida. A folha mais detalhada de cálculos pode ser encontrada neste [link](https://www.desmos.com/calculator/qq9ijzb9se) além de um detalhamento maior nos cálculos a seguir.

Considerando os valores de corrente pequenos comparados a corrente de polarização, mas também considerando essa corrente não muito pequena, para não encontrar valores de resistores muito grandes e aumentar muito a impedância de entrada vista pelo próximo estágio, exigindo uma realimentação muito maior do que o necessário e gastando uma energia no primeiro estágio através da dissipação de potência por resistores de emissores muito maior do que a dissipação de energia neste estágio, utilizando a folha de cálculos digital apresentada anteriormente, foi obtido:

$$I_{1}\approx 50\mu A$$

$$R_{G1,1}=\frac{V_{CC}-V_{GS1}}{I_{1}}=101.525k\Omega$$
$$R_{G1,2}=\frac{V_{GS1}-(-3)}{I_{1}}=56.9498k\Omega$$
$$I_{2}\approx 50\mu A$$
$$R_{G2,1}=\frac{V_{CC}-V_{GS2}}{I_{2}}=8.96631k\Omega$$
$$R_{G2,2}=\frac{V_{GS2}}{I_{2}}=85.0415k\Omega$$

E finalmente, podemos utilizar esses resistores para polarizar o nosso estágio, o circuito com os resistores com o terceiro estágio(o de potência), podem ser vistos na imagem abaixo:

<center>

![](https://i.imgur.com/FVDRpb5.png)

*Figura 14 - Circuito parcial, segundo e terceiro estágios*

</center>

Agora podemos comparar os valores teóricos com os valores obtidos via simulação:


|          |    Teórico     |    Simulado    | Erro (%) |
|:--------:|:--------------:|:--------------:|:--------:|
| $I_{D}$  |     $8.51mA$     |    $9.32mA$    | $9.52\%$  |
| $I_{G1}$  | $50\mu A$ | $50.5\mu A$ | $1.00\%$ |
| $I_{G2}$  |  $50\mu A$   |  $53.2\mu A$  | $6.40\%$ | 
| $V_{G1}$ |   $-0.125$    |    $-0.125V$     | $0.00\%$ |
| $V_{G2}$ |    $4.52V$    |    $4.52V$     | $0.00\%$ |


#### Resultados da simulação

Os resultados da simulação, já com segundo e terceiro estágios acoplados podem ser vistos abaixo:

<center>

![](https://i.imgur.com/runH3Sh.png)
*Figura 15 - Resultados da simulação - Segundo estágio*
</center>

A impedância de entrada obtida foi $Z_{in}\approx 36.5k\Omega$, este valor alto de impedância confere com o esperado, a topologia cascode, como dito anteriormente, possui alta impedância de entrada. Esta alta impedância, vista pelo primeiro estágio, poderá significará uma boa capacidade para ganho de tensão.

O ganho de tensão obtido nesse estágio através da simulação ficou:

$$G_v=8.261$$

A distorção harmônica total ficou inferior a 4%, a distorção de segunda e terceira ordem ficaram inferiores a 1%.

$$DH_3<1\%$$

Importante observar que a defasagem deste circuito é de $180^{\circ}$ como esperado da teoria.

#### Potência média consumida

A potência consumida total pode ser obtida através do seguinte cálculo:

$$P_{dissipada}=P_{resistores}+P_{transistor}$$

Como a corrente que flui pelos resistores de polarização são aproximadamente iguais, podemos calcular a potência total fazendo:

$$P_{dissipada}=\left(R_{G1,1}+R_{G1,2}+R_{G2,1}+R_{G2,2}\right)I'^{2}+V_{cc}\cdot I_{D}$$

$$P_{dissipada}=10^{3}\left(101.525+56.9498+8.96631+85.0415\right)\left(50\cdot10^{-6}\right)^{2}+5\cdot9.32\cdot10^{-3}$$

$$P_{dissipada}=47.23mW$$


#### Diagramas temporais vGS(t) e vDS(t)
Os diagramas dos sinais $v_{GS}(t)$ e $v_{DS}(t)$ do transistor foram obtidos via simulação, resultado apresentado abaixo:

| $v_{GS}(t)$ | $v_{DS}(t)$ |
|:--------:|:--------:|
|   ![](https://i.imgur.com/beDVYQH.png)|   ![](https://i.imgur.com/WDpNmlT.png)


## Amplificador de tensão (Par diferencial)

O amplificador de tensão baseado em par diferencial é uma topologia que dá um ganho na diferença dos sinais de entrada, conhecido como ganho diferencial. Por esse motivo, a maioria dos amplificadores operacionais utilizam essa topologia como primeiro estágio. Uma das suas grandes utilizades é a utilização da uma das entradas para realimentações, que inlcusive será utilizado nesse estágio. Essa topologia é fundamental no primeiro estágio por conta da nossa fonte (microfone) ser balanceada.

<center>

![](https://i.imgur.com/QcvcKyN.png)

Figura 16 - Topologia do par diferencial com TBJ

</center>

Visando a economia de energia, não foram utilizados o resistores de emissor, optando por uma topologia que permitisse a passagem de corrente de polarização, além disso, a fonte de corrente foi realizada de acordo com a topologia apresentada na figura 4 para obtenção do circuito abaixo:

<center>

![](https://i.imgur.com/kSfSt4a.png)

Figura 17 - Topologia final do primeiro estágio

</center>

#### Obtenção tensões e das correntes de polarização e definição do circuito

Primeiramente devemos entender quais são as ordens de grandeza do nosso sinal de operação, para isso, como sabemos o ganho do estágio anterior, e a tensão final do circuito, calcularemos a tensão final desse estágio:

$$V=\frac{V_{out}}{G_2}=\frac{3.8V}{8.261}=0.459992736957=460mV$$

Conhecendo a tensão máxima de entrada, calculamos o ganho desse estágio:

$$G=\frac{V}{V_{in\space máx}}=\frac{460mV}{20mV}=23$$

Do mesmo modo, conhecendo a impedância de entrada do próximo estágio, podemos calcular a corrente máxima para o próximo estágio:

$$I_{máx}=\frac{V}{Z_{in2}}=\frac{460mV}{35.6k\Omega}\approx 13\mu A$$

Como a corrente máxima é pequena, podemos escolher uma corrente de polarização pequena, neste caso foi escolhido $I_{CQ}=0.88mA$.

<center>

![](https://i.imgur.com/VompaBC.png)

Figura 18 - Curva característica do transistor TBJ BC547

</center>

Pode-se agora determinar o resistor que irá garantir essa corrente de acordo com a mesma topologia apresentada na figura 4.

$$R=\frac{0-\left(-3+0.62\right)}{0.88\cdot10^{-3}}=2704.54545455\Omega$$

Como sabemos da literatura, o circuito apresenta certa simetria, a corrente de polarização através da fonte de corrente, acarretará em correntes de polarização de cada transistor que serão metade da corrente de polarização pela fonte de corrente.

$$I_{CQ1}=I_{CQ2}=\frac{I}{2}=0.44mA$$

A partir disso, é possível calcular a transcondutância dos transistores:

$$G_m=g_{m1}=g_{m2}=\frac{I_{CQ}}{V_T}=\frac{0.44mA}{26mV}=16.923mS$$

Através desta condutância é possível determinar o ganho, sabendo a impedância de saída do circuito:

<center>

![](https://i.imgur.com/dVKKlaZ.png)

Figura 19 - Modelo de um amplificador usando transcondutância

</center>

Primeiramente para determinar o $R_{0}$ foi realizando uma simulação AC com impedância de saída muito alta:

<center>

![](https://i.imgur.com/YwkPq8S.png)

Figura 20 - Resultados da simulação em circuito aberto.
</center>


Obtendo o ganho de circuito aberto de $A_{v}=906.507$ podemos determinar o $R_{0}$:

$$R_{0}=\frac{A_{doc}}{G_{m}}=\frac{906.507}{16.923mS}=53566.32\Omega$$

De posse do valor da resistência de saída, e do valor da impedância de entrada podemos calcular o ganho total desse estágio:

$$R_{eq}=\left(R_{0}^{-1}+R_{L}^{-1}\right)^{-1}=53488\Omega$$

E assim, o ganho para essa carga:

$$G_{d}=g_{m}R_{eq}=905.2$$

Podemos também, determinar a impedância de entrada do circuito, para isso, precisamos determinar o $\beta$.

<center>

![](https://i.imgur.com/Xh3Y1Hr.png)

Figura 21 - Curva $I_{C}\times I_{B}$ do transistor BC547

</center>

De acordo com o ponto de polarização, temos:

$$\beta=\frac{I_{C}}{I_{B}}=\frac{440mA}{1.084\mu A}=405.9$$

Assim, é possível encontrar o resistor de entrada do modelo do transformador:

$$r_{\pi}=\frac{\beta}{g_{m}}=23985\Omega$$

Como a impedância de entrada da topologia diferencial é $2\times r_{\pi}$, temos que a impedância de entrada vai ser muito maior que a impedância de entrada exigida no projeto.

#### Realimentação através do resistor de emissor

O ganho requerido teórico é de $G_{T}=23$, por isso, realizaremos uma realimentação série-série, através do resistor de emissor conforme a figura abaixo:

![](https://i.imgur.com/6lxggBT.png)

Figura 22 - Topologia com os resistores de emissor

Sabemos que ao realimentarmos através do resistor de emissor, reduzimos o ganho, amplicamos a banda de passagem do sinal, além de reduzir distorções.

<center>

![](https://i.imgur.com/nTcyIN1.png)

Figura - 23 - Realimentação negativa

</center>

Tomando a realimentação negativa conforme a figura acima, temos:

$$\left(X\left(s\right)-G\left(s\right)Y\left(s\right)\right)H\left(s\right)=Y\left(s\right)$$

$$X\left(s\right)H\left(s\right)-G\left(s\right)Y\left(s\right)H\left(s\right)=Y\left(s\right)$$

$$X\left(s\right)H\left(s\right)=Y\left(s\right)+G\left(s\right)Y\left(s\right)H\left(s\right)$$

$$X\left(s\right)H\left(s\right)=Y\left(s\right)\left(1+G\left(s\right)H\left(s\right)\right)$$

$$\frac{Y\left(s\right)}{X\left(s\right)}=\frac{H\left(s\right)}{1+G\left(s\right)H\left(s\right)}$$

A realimentação através do resistor de emissor, tem potencial de reduzir ganho, com isso temos:

$$G(R_{E})=\frac{g_{m}R_{eq}}{1+g_{m}R_E}$$

Além disso, a realimentação possibilita uma redução na distorção de terceira ordem (a distorção de segunda ordem é teoricamente 0, pela topologia), então temos a segunte equação para distorção de terceira ordem:

$$DH_3(R_{E})=100\frac{20\cdot10^{-3}}{4\cdot26\cdot10^{-3}\left(1+g_{m}R_E\right)^{2}}$$

Para obter a solução destas equações e obter o $R_{E}$ foi utilizando a calculadora gráfica encontrada [aqui](https://www.desmos.com/calculator/xtwr2k9oxj)

<center>

![](https://i.imgur.com/hfREiMM.png)

Figura 24 - Solução de $R_{E}$ obtida

</center>

$$R_{E}=2266\Omega$$

Devido a polarização dos transistores usando a topologia de espelho de correntes, é possível perceber que temos uma pequena assimetria, por este motivo, usaremos uma ferramenta de otimização no ADS para encontrar valores de resistores próximos do valor calculado que obtenham os valores ótimos dado a assimetria da topologia.

Os intervalos de resistores vão estar dentro do valor calculado teoricamente: 

$$2000\Omega<R<2500\Omega$$

As metas para otimização foram $P>100mW$ e $DH_{3}<1\%$, os resultados podem ser observados na imagem abaixo:

<center>

![](https://i.imgur.com/5d5qQrE.png)

Figura 25 - Otimização para obtenção dos resistores de emissor

</center>

Os valores ótimos ja estavam muito próximos do valor teórico, por isso foram necessários somente 11 iterações. Com isso, obtemos os resistores mais precisos.

$$R_{E1}=2224.04\Omega$$

$$R_{E2}=2096.77\Omega$$

Com esses valores podemos finalmente realizar a simulação após juntar todos os estágios conforme a figura abaixo:

<center>

![](https://i.imgur.com/HWWxcR5.png)

Figura 26 - Circuito completo

</center>

#### Resultados da simulação

Após obtenção de todos os valores, foi oferecido um caminho DC na entrada do par diferencial através de um resistor de $100k\Omega$, colocado um transformador para modelar um circuito de entrada balanceado e a alteração de fontes de alimentação corretamente, obtemos o circuito final, mostrado abaixo:

<center>

![](https://i.imgur.com/FeSLTlQ.png)


Figura 27 - Circuito amplificador final

</center>

Os resultados da simulação podem ser observados a seguir:

<center>

![](https://i.imgur.com/6guBO5Z.png)

Figura 27 - Resultados da simulação topologia completa
</center>

#### Potência média consumida

A potência média consumida nesse estágio foi:

$$P_{dis}=P_{tr\operatorname{ans}istores}+P_{resistores}$$

$$P_{dis}=0.00088\left(\left(-1.55+3\right)+\left(-2.38+3\right)+\left(5-\left(-1.6\right)\right)\right)+2200\cdot\left(0.00088\right)^{2}=9.33328mW$$

#### Diagramas temporais vBE(t) e vCE(t)

Os diagramas dos sinais $v_{BE}(t)$ e $v_{CE}(t)$ do transistor foram obtidos via simulação, resultado apresentado abaixo:

| $v_{BE}(t)$ | $v_{CE}(t)$ |
|:--------:|:--------:|
| ![](https://i.imgur.com/plgfaPb.png)| ![](https://i.imgur.com/jeQGXIs.png)

# Topologia completa

Uma vez possuindo amplificador final, é importante observar o seu comportamento final, como um circuito único.

<center>

![](https://i.imgur.com/QpF8kDS.png)

Figura 28 - Circuito completo implementado no ADS
</center>

O circuito foi implementado no ADS e pode ser visto mais detalhadamente nos anexos.

#### Resultados da simulação

Os resultados da simulação podem ser vistos na figura abaixo:

<center>

![](https://i.imgur.com/97TfWmo.png)


Figura 29 - Resultados finais

</center>

#### Potência média consumida

A potencial total do circuito pode ser obtida pela potência fornecida pelas fontes, utilizando o ADS obtemos, pela ferramenta _Device Operating Point_:


```python
V_SOURCE      SRC29

Is               -0.0703
Power            -0.3515
Vs                5
---------------------------------
V_SOURCE      SRC28

Is               -0.121801
Power            -0.365403
Vs                3
```

$$P_{total}=P_{1}+P_{2}$$
$$P_{total}=0.3515+0.365403=716.903mW$$

E assim, calculamos o rendimento do amplificador:

$$\eta=\frac{P}{P_{total}}=\frac{101.5mW}{716.903mW}=14.158\%$$

#### Impedência de entrada e de saída

A impedância de entrada pode ser obtida pelos resultados da simulação dos circuitos juntos obtidos na figura 29.

$$Z_{in}=40k\Omega$$

Os resistores de emissor do par diferencial tiveram um papel fundamental no aumento da impedância de entrada, isso se deve ao fato do circuito "enxergar" a resistência de emissor com um aumento pelo fator $\beta$.

#### Ganho de tensão e distorção harmônica

O ganho de tensão também pode ser obtido pela figura 29.

$$G = 181.66$$

A distorção harmônica de terceira ordem:

$$DH_3=0.955\%<1\%$$

#### Variação do ganho com a temperatura

A variação do ganho com a temperatura pode ser obtido via simulação pelo software ADS, a curva pode ser visto na figura abaixo:

<center>

![](https://i.imgur.com/kSkFuwc.png)

Figura 30 - Variação do ganho com a temperatura

</center>

Os valores de ganho aumentam com a temperatura e apresentam uma largura de variação de $0.6\%$ tomando como referência o ganho à temperatura ambiente.

#### Resposta em frequência

A reposta em frequência pode ser obtida variando a frequência numa simulação AC, com a frequencia variando entre $40Hz$ até $18kHz$:

<center>

![](https://i.imgur.com/dTUzCud.png)

Figura 31 - Variação do ganho com a frequência

</center>

É possível perceber baixa variação do ganho na faixa observada, além disso, há uma diferença do valor do ganho comparando com os encontrados anteriormente, essa diferença se deve ao fato de que essa simulação foi realizada usando *Simulation AC* no ADS e as anteriores, utilizando *Harmonic Balance*

A fase não será levada em consideração, pois, a duração de sílabas possui duração muito pequena para que a distorção por fase ser perceptível, em aplicações de áudio, a fase não é um fator considerável, por este os fabricantes nos datasheets não apresentam a resposta dos equipamentos para a fase.

# Transformador para o fone de ouvido

O transformador utilizado para acoplar o fone de ouvir após o estágio de ganho de potência escolhido foi através do site www.digikey.com. A Digi-Key é uma empresa americana que distribui componentes eletrônicos, sendo a quinta maior distribuidora de componentes eletrônicos do mundo.

Após entrar no site, é possível navegar pelo catálogo com uma boa facilidade:

`Product Index > Transformers> Audio Transformers`

Após isso, pode-se efetuar um filtro nos diversos componentes, a fabricante do transformador desajável é a *Triad Magnetics* com relação de espiras de 1:1 como pode ser visto na imagem abaixo:

<center>

![](https://i.imgur.com/u96NFlT.png)

Figura 32 - Escolha do transformador

</center>

O transformador escolhido foi o **TY-146P**.

<center>

![](https://i.imgur.com/exFDOvH.png)

Figura 33 - Transformador TY-146

</center>

A razão pela escolha é por trabalhar na faixa de frequências típicas de áudio e ter capacidade de trabalhar com a potência desajada de $100mW$, funcionando bem com o projeto do amplificador de áudio.

# Conclusão

O projeto permitiu a realização de um amplificador de áudio de acordo com os parâmetros de projeto, foi bastante desafiador e enriquecedor.

###### tags: `Eletrônica Analógica` `UFBA` `Blog`

