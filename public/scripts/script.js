function clicou(){
    document.getElementById('texto').innerHTML= 
    'Esse projeto nasceu com objetivo de facilitar o processo de busca de informações a meu respeito, pois toda vez me candidato a uma vaga ou ofereço um serviço a alguém, o recrutador ou o cliente, provavelmente fariam uma pesquisa a meu respeito para saber informações pessoais, profissionais e conhecer meu trabalho. Para isso eles teriam que navegar em diversas redes sociais (instagram, linkedin), analisar meu currículo e repositórios git. Essa página tráz de maneira resumida todas essas informações e disponibiliza o acesso a essas redes de maneira mais rápida, poupando assim o tempo de quem estiver me avaliando.'
}
function clicou2(){
    document.getElementById('texto').innerHTML= 
    ''
}



function redir(elemento){
    const pAdress= elemento.getAttribute('id')
    window.open(`https://github.com/GuiJR777/${pAdress}`)
     
}
