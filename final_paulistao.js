const prompt = require('prompt-sync')()


function main(){
    console.log('#### FINAL PAULISTÃO ####')
    const gols_sp = Number(prompt('Gols marcados pelo São Paulo: '))
    const gols_palmeiras = Number(prompt('Gols marcados pelo Palmeiras: '))

    // SE o SPFC ganhar é campeão!
    if (gols_sp > gols_palmeiras){
        console.log('São Paulo é campeão 2021!!!!!')
    }else if( gols_sp < gols_palmeiras){
        console.log('Palmeiras é campeão 2021!!!!!')
    }else{
        console.log('A partida empatou. Pênaltis!')
    }

}

main()


