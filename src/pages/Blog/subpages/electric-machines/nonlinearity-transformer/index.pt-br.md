<!--
title: Não linearidade no transformador
link: /blog/electric-machines/nonlinearity-transformer
categoryTitle: Máquinas Elétricas
categoryLink: /blog/electric-machines
tags: [Computação, Matemática, Desafio]
authorNick: taffarel55
authorName: Maurício Taffarel
authorId: 18634201
description: Esta é uma descrição em português
date: "2012/10/22"
time: 14
-->

# Trabalho - Texto Introdutório

**Aluno:** Maurício Taffarel
**Data:** 06/10/2020
**Professor:** Kléber Freire

## 1. Explicar usando a curva BxH do material ferromagnético do núcleo do transformador, a forma da corrente de excitação (Io) do transformador em vazio, contendo uma componente fundamental (60 Hz) e uma forte componente de terceira harmônica (180Hz), conforme visto na figura abaixo.

<center>
    
![](https://codimd.s3.shivering-isles.com/demo/uploads/upload_43f2f91bded987575c06390297cd9f0c.png)
    
</center>

Ao excitar um material ferromagnético através de um campo magnético $H$, temos como consequência, o alinhamento dos domínios magnéticos desde material, ocasionando o surgimento de uma densidade de fluxo magnético $B$. Com o aumento desde campo $H$, consequentemente temos um aumento nesta densidade de fluxo $B$. Contudo, na medida em que aumentamos o campo magnético $H$, chegamos num momento em que boa parte dos domínios magnéticos já estão alinhados com este campo, ocorrendo assim uma saturação no aumento da ddensidade de fluxo $B$.

Ao reduzir este campo magnético aplicado $H$ até torná-lo ausente no material, temos que os domínios magnéticos ainda apresentam uma direção preferencial de alinhamento, mesmo com a ausência deste campo $H$. Isso leva a uma densidade de fluxo resídual $B_r$, este fenômeno é conhecido como _Histerese_.

<center>
    
![](https://codimd.s3.shivering-isles.com/demo/uploads/upload_92959701c030bd6623eb697d3ffd735a.png)

###### Figura 1 - Laço de Histerese. Disponível em \<https://pt.wikipedia.org/wiki/Histerese\>

</center>
    
Em transformadores, os materiais utilizados para fabricação do núcleo para acoplamento magnético dos circuitos são materiais ferromagnéticos, que apresentam o efeito da histerese magnética. Ou seja, o transformador está "sujeito" a não-linearidade destes materiais observado no fenômeno da histerese.
    
Considerando um transformador com área da seção transversal $A_{c}$, comprimento $l_{c}$ com $N$ espiras, valores conhecidos: 
 
<center>
    
![](https://codimd.s3.shivering-isles.com/demo/uploads/upload_e84e8e185ba0c144fbf82cb87722e747.png)
    
###### Figura 2 - Transformador[^1]
    
</center>   
    
A corrente de excitação solicitada pela rede, apresenta uma forma peculiar. Supondo um fluxo magnético $\phi(t)$ senoidal, $\phi(t)=\phi_{máx}sen(wt)=A_{c}\times B_{máx}sin(wt)$, temos uma tensão induzida também senoidal $e(t)=N\dfrac{\partial\phi(t)}{\partial t}=wN\phi_{máx}cos(wt)$.
    
Sabendo que a corrente de excitação $i_{\phi}(t)$ está diretamente relacionado com a força magnetomotriz de excitação, que por sua vez está relacionado também com o campo magnético de excitação $H_{c}(t)$ através da equação:
    
$$i_{\phi}(t) = \frac{H_{c}(t)}{l_{c}\times N}$$
    
E sabendo também que o fluxo magnético $\phi(t)$ está relacionado com com a densidade de fluxo $B_{c}$ e com a área da seção transversão do núcleo do transformador $A_{c}$ através da equação:
    
$$\phi(t)=B_{c}(t)\times A_{c}$$ 
    
Sabendo também que é possível traçar uma curva característica entre $H_{c}$ e $B_{c}$, que vimos ateriormente que não é linear, podemos obter também uma curva $i_{\phi}\times\phi$ análoga mostrada na [figura 3(b)](#Figura-3---Fen%C3%B4menos-de-excita%C3%A7%C3%A3o-a-Tens%C3%A3o-fluxo-e-corrente-de-excita%C3%A7%C3%A3o-b-La%C3%A7o-de-histerese-correspondente2), uma vez que $A_{c}$, $l_{c}$ e $N$ são grandezas constantes do transformador apresentado na [figura 2](#Figura-2---Transformador1).
    
Logo, podemos obter gráficamente $i_{\phi}(t)$ através do laço de histerese:

<center>
    
![](https://codimd.s3.shivering-isles.com/demo/uploads/upload_6c6755b089f662ea55017481755a8927.png)
    
###### Figura 3 - Fenômenos de excitação. (a) Tensão, fluxo e corrente de excitação; (b) Laço de histerese correspondente.[^2]
    
</center>
    
Finalmente obtemos $i_{\phi}(t)$ e verificamos como seu comportamento singular se deve exclusivamente de uma característica não linear proviniente do fenômeno da histerese. Considerando um regimente de excitação CA de um transformador e considerando simetria de $i_{\phi}\times\phi$ da [figura 3(b)](#Figura-3---Fen%C3%B4menos-de-excita%C3%A7%C3%A3o-a-Tens%C3%A3o-fluxo-e-corrente-de-excita%C3%A7%C3%A3o-b-La%C3%A7o-de-histerese-correspondente2), fica fácil verificar que a $i_{\phi}(t)$:
    
- É periódico, com mesmo período de $\phi(t)$ e de $e(t)$, onde irei chamar de $T$
- Apresenta distorção harmônica, possuindo outras frequências além da fundamental $w$
    
Logo, pode-se observar heuristicamente que $i_{\phi}(t+\frac{T}{2})=-i_{\phi}(t)$.
    
Além disso, como observado anteriormente, a corrente de excitação apresenta distorção harmônica, logo $i_{\phi}(t)$ pode ser expandido em séries de Fourier:
    
$$i_{\phi}(t) = i_{\phi}(0)+\sum_{n=1}^{\infty}i_{\phi_{n}}cos(nwt+\theta_{n})$$
    
É fácil verificar observando a [figura 3(b)](#Figura-3---Fen%C3%B4menos-de-excita%C3%A7%C3%A3o-a-Tens%C3%A3o-fluxo-e-corrente-de-excita%C3%A7%C3%A3o-b-La%C3%A7o-de-histerese-correspondente2) que o $i_{\phi}(0)=0$
    
Sabendo que $i_{\phi_{n}} = \sqrt{a_{n}^{2}+b_{n}^{2}}$, onde $a_{n}$ e $b_{n}$ podem ser encontrados através dos coeficientes da série trigonométrica de Fourier:

$$a_{n}=\frac{2}{T}\int_{c}^{c+T}i_{\phi}(t)cos(\frac{2\pi nt}{T})dt$$

$$b_{n}=\frac{2}{T}\int_{c}^{c+T}i_{\phi}(t)sin(\frac{2\pi nt}{T})dt$$

Calculando então $a_{n}$, usando como intervalo de integração $-\frac{T}{2}\le t\le\frac{T}{2}$ temos:
$a_{n}=\frac{2}{T}\int_{-\frac{T}{2}}^{\frac{T}{2}}i_{\phi}(t)\cos(\frac{2\pi nt}{T})dt$

Dividindo em duas integrais:
$a_{n}=\frac{2}{T}\left(\int_{-\frac{T}{2}}^{0}i_{\phi}(t)\cos(\frac{2\pi nt}{T})dt+\int_{0}^{\frac{T}{2}}i_{\phi}(t)\cos(\frac{2\pi nt}{T})dt\right)$

Fazendo $u=t-\frac{T}{2}$ na segunda integral:
$a_{n}=\frac{2}{T}\left(\int_{-\frac{T}{2}}^{0}i_{\phi}(t)\cos(\frac{2\pi nt}{T})dt+\int_{-\frac{T}{2}}^{0}i_{\phi}(u+\frac{T}{2})\cos(\frac{2\pi nu}{T}+\pi n)dt\right)$

Somando as duas integrais, considerando que $i_{\phi}(u+\frac{T}{2})=-i_{\phi}(t)$ como foi observado anteriormente:
$a_{n}=\frac{2}{T}\int_{-\frac{T}{2}}^{0}i_{\phi}(t)\left(\cos(\frac{2\pi nt}{T})-\cos(\frac{2\pi nt}{T}+\pi n)\right)dt$

Podemos verificar que existem componentes de $n$ onde $a_{n}=0$, isso é verdade, se somente se:
$\frac{2\pi nt}{T}=\frac{2\pi nt}{T}+\pi n+2k\pi$

Resolvendo algebricamente a expressão acima, pode-se obter a condição em que $a_{n}=0$, que é quando $n=2k$. A demonstração de que $b_{n} = 0$ para $n=2k$ é totalmente análoga, trocando $cos(\frac{2\pi nt}{T})$ por $sen(\frac{2\pi nt}{T})$

Logo, podemos afirmar que $i_{\phi_{2k}} = \sqrt{a_{2k}^{2}+b_{2k}^{2}}=0$

isto explica o fato da corrente de excitação $i_{\phi}(t)$ possui somente componentes ímpares
$$i_{\phi}(t) = \sum_{n=0}^{\infty}i_{\phi_{n}}cos((2n+1)wt+\theta_{n})$$

$$
i_{\phi}(t) =
i_{\phi_{1}}cos(wt+\theta_{1})+
i_{\phi_{3}}cos(3wt+\theta_{3})+
i_{\phi_{5}}cos(5wt+\theta_{5})+...
$$

Logo, chegamos a uma interessante conclusão, onde num transformador com núcleo de material ferromagnético, com área da seção transversal $A_{c}$, comprimento $l_{c}$ com $N$ espiras, em regime permanente com excitação CA, a corrente de excitação $i_{\phi}(t)$ apresenta distorção harmônica, com componentes de ordem ímpar.

No exemplo em questão, foi apresentado em que o transformador a vazio possui componente fundamental de $60Hz$ e uma componente de terceira harmônica de $180Hz$, contudo, numa situação prática, poderiamos ter mais componentes de ordem ímpar, sendo a quinta harmônica com $300Hz$, a sétima com $420Hz$, e assim sucessivamente.

## Conclusão

Do ponto de vista da qualidade energética, a presença de harmônicas em uma rede, podem acarretar em uma série de problemas, vislumbrando os problemas mas diretos, pode-se citar que a existência de harmônicas pode aumentar o valor da corrente de excitação eficaz que por sua vez, podem resultar em diversos problemas como aumento de perdas por histerese, correntes parasitas em máquinas elétricas de modo geral; erros em equipamentos; erros em sistemas de proteção; entre outros.

> Para eluciar os conceitos aprendidos durante esse trabalho _(espero ter tempo para fazer outros com esse nível de detalhe)_, fiz uns gráficos interativos com funções hipotéticas, onde é possível ver como que uma carga não linear, pode injetar componentes harmônicas na rede.
>
> Link para acessar o recurso: [Gráficos Interativos](https://www.desmos.com/calculator/l2jbmdl3lh)

###### tags: `Blog`,`UFBA`, `Avaliações`

[^1]: CHAPMAN, Stephen J. Electric Machinery Fundamentals. 2nd ed., Nova Iorque, McGraw Hill, 2001.
[^2]: UMANS, Stephen D. Máquinas elétricas de Fitzgerald e Kingsley [recurso eletrônico] / Stephen D. Umans ; tradução: Anatólio Laschuk. – 7. ed. – Dados eletrônicos. – Porto Alegre : AMGH, 2014.
