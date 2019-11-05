#!/bin/bash   

# testaping(){
#     echo "Seu ping atual é de $teste ms"
#     typeset -i teste
#     lag=$(bc -l <<<"scale=0; $teste*1000/1")
#     if `[$lag > 100000]`
#     then
#         echo "A conexão não está tão boa pra jogo. Melhor nem logar!"
#     else
#         echo "Tudo pronto! Só vai!"
#     fi
# }
echo -e "Digite a opção do jogo você quer saber o ping:\n1)DOTA\n2)LOL"
read JOGO
echo "testando ping..."
if [ $JOGO = 1 ];
then 
    teste=$(ping -c 6 209.197.25.1 | tail -1| awk '{print $4}' | cut -d '/' -f 2)
    echo "Seu ping atual é de $teste ms"
    typeset -i teste
    lag=$(bc -l <<<"scale=0; $teste*1000/1")
    if [ $lag -gt 100000 ]
    then
        echo "A conexão não está tão boa pra jogo. Melhor nem logar!"
    else
        echo "Tudo pronto! Só vai!"
    fi
fi
if [ $JOGO = 2 ];
then
    teste=$(ping -c 6 104.160.152.3 | tail -1| awk '{print $4}' | cut -d '/' -f 2)
    echo "Seu ping atual é de $teste ms"
    typeset -i teste
    lag=$(bc -l <<<"scale=0; $teste*1000/1")
    if [ $lag -gt 100000 ]
    then
        echo "A conexão não está tão boa pra jogo. Melhor nem logar!"
    else
        echo "Tudo pronto! Só vai!"
    fi
fi