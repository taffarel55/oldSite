<!--
title: "Blog"
link: "/blog"
author: taffarel55
date: 22-10-2012
-->

# Projeto 3 - Projeto de amplificadores de um transistor

### Aluno: Breno Amin, Maurício Taffarel

[TOC]

O presente trabalho almeja projetar um amplificador a partir de topologias diferentes que apresentam suas particularidades, vantagens e desvantagens. Os dispositivos que são capazes de realizar essa ação, essenciais para que os sons cheguem até o sensor auditivo, consistem em equipamentos com a capacidade de aumentar a potência e o volume de um som (instrumento musical, fones de ouvido ou áudio para a televisão). A potência, inclusive, é um parâmetro imprescindível que permite compreender o quanto de intensidade o som amplificado pode atingir.

Os amplificadores de áudio, por exemplo, são essenciais uma vez que os aparelhos de áudio, durante o processamento de sinais, utilizam baixíssimas correntes e tensão da ordem de milivolts e miliampéres. Dessa forma, com essa intensidade, torna-se praticamente impossível estimular uma caixa de som ou um alto falante, por exemplo e, portanto, torna-se imprescindível a utilização de um amplificador. Há casos em que os sinais também não conseguem estimular o amplificador de áudio, resultando em uma baixa potência de saída e a percepção é de um som com intensidade reduzida, de modo que é necessário a utilização de um amplificador adicional antes do estágio final.

Portanto, a partir desse trabalho estudaremos de forma detalhada e empírica a construção de circuitos capazes de promover a amplificação de sinais, sejam de áudio ou não, utilizando como célula básica, os transistores já estudados pelos alunos de Engenharia Elétrica durante a matéria de Laboratório Integravo IV. Com ênfase no amplificador usando um transistor e o amplificador diferencial, que utiliza dois transistores, formando um circuito em espelho.


## Projeto de amplificadores de um transistor

Para realizar o projeto do amplificador utilizando um transistor, foi necessário seguir, como forma de concepção do circuito, o gabarito fornecido:

[](https://i.imgur.com/XMrnvRQ.png)

Portanto, precisou-se mensurar, de acordo com os parâmetros já fornecidos, a corrente de operação:

$V_{i}$ = 20 mV
A= 25
$V_{0}$ = 0,5 V
$R_{L}$ = 1 $M\Omega$
$I_{0}$ = $5.10^{-7}$ A


A partir do cálculo dos parâmetros iniciais, o primeiro passo do projeto foi a eliminação das capacitâncias de acoplamento e aterramento por circuito aberto, bem como obter o ponto de polarização e, em seguida, determinar o valor dos parâmetros que envolvem a discussão de um transistor a pequenos sinais. A primeira curva que se observa a seguir modela a corrente de saída pela tensão na malha de entrada. Escolher um bom ponto é crucial, uma vez que a depender da região, o sinal de entrada pode ser cortado ou amplificado por completo de forma satisfatória.

![](https://i.imgur.com/WSOu1T6.png)

O ponto escolhido, evidenciado acima, nos fornece uma corrente de coletor equivalente a aproximadamente 3mA e uma tensão $V_{BE}$=0,66V. Através de um probe, como se visualiza na figura a seguir, também se identifica a corrente obtida com essa tensão na malha de entrada do transistor:

![](https://i.imgur.com/Be9FHMC.png)

Em posse dos valores de corrente de coletor e a tensão na malha de entrada, bem como o conhecimento da topologia a ser implementada para a amplificação do sinal, calculou-se os resistores que deveriam ser usados para alcançar o que se idealizou para o projeto.

### Esquemáticos com os circuitos e os cálculos dos componentes.

Após levantar a curva, analisamos a excurssão do sinal de definimos o valor de $V_{BE}=0.66V$. Isso resulta em uma corrente de coletor de $I_{C}=3.02\cdot10^{-3}$.

Considerendo 100mV no resistor $R_E$:
$$ R_{E}=\frac{0.1}{I_{C}} = 33.11\Omega$$

Fazendo corrente estática do ramo de entrada ser $10\% \space I_C$, calculamos $I_1$:

$$I_{1}=\frac{I_{C}}{10}$$

E assim calculamos $R_1$ e $R_2$:

$$R_{1}=\frac{3-\left(V_{BE}+0.1\right)}{I_{1}}=7417.218\Omega$$
$$R_{2}=\frac{V_{BE}+0.1}{I_{1}}=2516.56\Omega$$

Para obter um ganho de 25, obtemos a partir da transcondutância:

$$g_{m}=40I_{C}$$

Através do cálculo da transcondutância e assumindo uma resistência $r{_0}$ muito maior que $R_{C}$, determinou-se o valor desse resistor, como se evidencia a seguir:Através do cálculo da transcondutância e assumindo uma resistência $r{_0}$ muito maior que $R_{C}$, determinou-se o valor desse resistor, como se evidencia a seguir:Através do cálculo da transcondutância e assumindo uma resistência $r{_0}$ muito maior que $R_{C}$, determinou-se o valor desse resistor, como se evidencia a seguir:

$$R_{C}=\frac{25}{g_{m}}=206.95\Omega$$

Calculamos também a impedência de entrada do circuito:

$$r_{p}=\frac{\beta}{g_{m}}$$
$$R_{in}=\left(\frac{1}{R_{1}}+\frac{1}{R_{2}}+\frac{1}{r_{p}}\right)^{-1}=1190.77\Omega$$

E para impedância de saída, como $r_0>>R_C$, aproximamos $R_{out} \approx R_C$:

$$R_{o}=R_{c}=206.95\Omega$$

Após ajuste através do resistor $R_1$, para compensar efeitos das aproximações do cálculos considerando $I_B=0$, diminuimos um pouco o valor deste resistor valor através de um _Tuning_. O resultado está mostrado abaixo:

![](https://i.imgur.com/Mv0xSRl.png)

Para o cálculo dos capacitores de bloqueio e capacitor de curto do $R_E$, utilizamos as seguintes expressões:

$$C>>\frac{1}{2\pi\cdot1\cdot10^{6}\min\left(R_{o},R_{in}\right)}=7.6903668502×10^{-10}$$

$$C_{E}>>\frac{1}{2\pi\cdot1\cdot10^{6}\cdot R_{E}}=4.8064792814×10^{-9}$$

O valor de todos os capacitores escolhidos foram de $1\mu F$.

### Descrição das simulações e seus resultados.

Foram realizadas 3 tipos de simulações:
- Simulação DC
- Simulação AC
- Balanço Harmônico

#### Simulação DC

Com os valores calculados e ajustados, foram medidos os valores através de uma simulação utilizando o _Annotate DC Solution_:

![](https://i.imgur.com/0coAAJ0.png)

#### Simulação AC

Com os valores calculados anteriormente o seguinte esquemático a seguir foi montado:

![](https://i.imgur.com/dUVZkGI.png)


Os resultados da simulação estão descritos abaixo:
![](https://i.imgur.com/mgtWbMT.png)

Com os valores calculados anteriormente, foi realizado um ajuste fino através da ferramenta disponibilizada pelo software Advanced Design System (_Tunning_) no $R_C$ para obtenção do ganho adequado, o resultado do esquemático está mostrado a seguir:

![](https://i.imgur.com/eZJRwLK.png)

Após a montagem do esquemático, buscou-se, por meio de simulação, determinar o ganho de tensão em dB entre 100 kHz e 10 MHz e comparar o ganho simulado em 1 MHz com o valor teórico esperado. A simulação realizada no ADS está representada na figura a seguir:

![](https://i.imgur.com/LuUMLKd.png)

Ainda na simulação AC, buscou-se identificar as impedâncias de entrada e de saída e compará-las com os valores teóricos esperados em 1 MHz. O resultado teórico e prático estão evidenciados a seguir:

![](https://i.imgur.com/04LaE5X.png)

![](https://i.imgur.com/3rpI0qB.png)

Como se verifica acima, o valor teórico da impedância de entrada e saída não estão condizentes com o que se obtém na prática para a frequência de análise de 1MHz. Avalia-se que esse efeito seja esperado, uma vez que para frequências consideráveis, as capacitâncias influem na impedância de entrada e saída, o que justifica o resultado obtido. Entretanto, para frequencias mais baixas, verifica-se que o resultado do teórico e prático se aproximam de maneira satisfatória devido a não influência das capacitâncias intrísecas.

#### Simulação de balanço harmônico

Para a entrada de $V_{in}= 2 mV$, obtem-se:

![](https://i.imgur.com/zMrgTmx.png)

![](https://i.imgur.com/aXfl0e2.png)

Para a entrada de $V_{in}= 20 mV$, obtem-se:

![](https://i.imgur.com/eYzb7Pf.png)

![](https://i.imgur.com/79W2heo.png)

Para a entrada de $V_{in}= 200 mV$, obtem-se:

![](https://i.imgur.com/3ZdNCo6.png)

![](https://i.imgur.com/fh7gnh2.png)

Como se verifica acima, ao aumentar a tensão de entrada, aumenta-se também as harmônicas em relação ao sinal de entrada. Portanto, como dito na introdução um dos parâmetros para a construção de um amplificador satisfatório é o ponto de operação e, a magnitude da tensão de entrada que se busca amplificar, uma vez que o transistor não é um componente linear. Ademais, para sinais de entrada muito altos, a análise de pequenos sinais não é fidedigna. 

### Conclusões.

Como se pode obversar através das discussões realizadas acima, o circuito denominado de emissor - comum, ou amplificador com um resistor, apresenta a capacidade de amplificar um sinal de entrada, sem contudo, causar o defasamento da sua forma de sinal. Avalia-se ainda que, como já visto em outras matérias como eletrônica analógica, a topologia abordada, também conhecida como emissor comum, garante uma alta impedância de entrada.

Ademais, por meio do trabalho pode-se aprender sobre a polarização do transistor e a construção de um amplificador de sinal, circuito extremamente importante em diversas aplicações distintas.

## 





















## Projeto de um amplificador diferencial
O segundo projeto é constituído por um amplificador diferencial, isto é, a tensão de saída é uma função da diferença dos sinais de entrada. Entre as vantagens dos amplificadores diferenciais, pode-se citar: possibilidade de aumento da excursão de um sinal resultante, cancelamento do segundo harmônico, imunidade a sinais interferentes e rejeição do ruído da fonte de alimentação através do balanceamento. 

Além disso, apresenta uma faixa de linearidade maior do que no emissor comum. É importante salientar ainda que, para que se possa usufruir das particularidades da topologia diferencial, é essencial que os transistores que compõem a topologia sejam iguais, isto é, se observe a simetria física no circuito. Caso contrário, não se garante a presença de todas as características citadas anteriormente.

### Esquemáticos com os circuitos e os cálculos dos componentes.

### Descrição das simulações e seus resultados.

### Conclusões.


## Referênias bibliográficas.

