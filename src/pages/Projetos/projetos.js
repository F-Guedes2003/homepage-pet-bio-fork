import CardProjeto from "../../components/CardProjeto/cardProjeto";
import MenuNavegacao from "../../components/MenuNavegacao/menuNavegacao";
import "./projetos.css";

export default function Projetos() {
    return (
        <>
            <MenuNavegacao />
            <div className="menu-projetos--corpo">
                <h1 className="menu-projetos--titulo">Projetos Desenvolvidos pelo PET/ADS</h1>
                <section className="menu-projetos">
                    <CardProjeto titulo="Personalidades da Computação"
                        descricao="Projeto de ensino que visa realizar um levantamento sobre os pioneiros da Ciência da Computação  e suas principais contribuições, para difusão da história desta ciência a todos os estudantes do câmpus."
                        expandido="O curso de ADS possui sólida base teórica e um forte enfoque prático. Entretanto, durante o curso, pouco é abordado sobre a história da Computação e os pioneiros que ajudaram a construir essa ciência. Este projeto de ensino tem por objetivo realizar uma pesquisa e sumarização dos pioneiros da Ciência da Computação e suas principais contribuições. Os resultados dessa pesquisa serão disseminados em duas etapas. Inicialmente, será realizada uma exposição durante a recepção dos ingressantes dos cursos de Computação do câmpus. Em um segundo momento, pretende-se realizar uma votação para dar nome aos laboratórios de informática do câmpus."
                    ></CardProjeto>
                    <CardProjeto titulo="Página do grupo PET/ADS/SCL"
                        descricao="Desenvolvimento da página PET/ADS do câmpus São Carlos, para divulgação de informações sobre o grupo, seus projetos, membros e processos seletivos."
                        expandido="Tão importante quanto desenvolver atividades de ensino, pesquisa e extensão é disseminar os resultados de trabalhos do PET/ADS para a comunidade de Computação dentro e fora do câmpus. Por isso, foi desenvolvido um site em React para divulgar o grupo PET/ADS, seus membros e ex-membros e os projetos desenvolvidos ao longo dos anos."
                    ></CardProjeto>
                    <CardProjeto titulo="Projeto Leitura Compartilhada"
                        descricao="Projeto de ensino que visa estimular a leitura de clássicos da Computação de uma maneira leve e integrada, no qual cada integrante do PET/ADS lê um capítulo e compartilha o conteúdo com os demais por meio de um resumo em slides."
                        expandido="A literatura em Ciência da Computação é vasta e de extrema qualidade, mas, atualmente, a grande maioria dos estudantes não possui o hábito de consumir conteúdo técnico a partir de livros. Para estimular o hábito, esse projeto de ensino visa realizar um rodízio de leitura no qual cada integrante do PET/ADS lê um capítulo e prepara um material no formato de slides. A cada encontro, os slides são compartilhados em apresentações junto aos demais membros. Ao final da leitura de cada livro, o material desenvolvido será disponibilizado de maneira livre para a comunidade de Computação dentro e fora do câmpus."
                    ></CardProjeto>
                    <CardProjeto titulo="Página do projeto de extensão com a APAE "
                        descricao="Desenvolvimento da página para o projeto de extensão Inclusão Digital para Pessoas com Deficiência Intelectual, junto a APAE São Carlos. "
                        expandido="O projeto Inclusão Digital para Pessoas com Deficiência Intelectual, coordenado pela profa. Célia Kawabata, tem como objetivo fazer a inclusão digital e social de pessoas com deficiência intelectual por meio de uma parceria com a APAE São Carlos. Para divulgar a iniciativa, da qual alunos do PET/ADS também fazem parte, foi desenvolvida uma página Web em React, que detalha as ações, bem como os professores, tutores e alunos envolvidos no projeto."
                    ></CardProjeto>
                    <CardProjeto titulo="Organização da Semana da Computação - Wecomp "
                        descricao="Organização e realização da Wecomp, a Semana de Computação do IFSP São Carlos, que oferece diversas palestras, cursos e também promove a integração junto às empresas de tecnologia da região. "
                        expandido="A Wecomp é a semana da computação do IFSP São Carlos, que neste ano realizará sua quarta edição. O objetivo do evento é proporcionar uma maior interação entre os estudantes, o mercado de tecnologia e a cidade de São Carlos. Ao longo de cinco dias de evento, serão realizados diversos minicursos, talks e processos seletivos, que visam  reduzir a distância entre a teoria e a prática, ensinar tecnologias novas e promover o ingresso dos participantes no mercado de trabalho."
                    ></CardProjeto>
                    <CardProjeto titulo="Página da Semana da Computação - Wecomp"
                        descricao="Desenvolvimento da página para a semana da computação do IFSP São Carlos - Wecomp, contendo informações sobre o evento, sua programação e empresas participantes."
                        expandido="A Wecomp é uma semana da computação que visa aproximar os alunos de Computação do câmpus das diversas empresas existentes na região. Para divulgar a semana, foi desenvolvida uma página em React contendo informações sobre datas, programação, local de realização e empresas parceiras. "
                    ></CardProjeto>
                </section>
            </div>
        </>
    )
}