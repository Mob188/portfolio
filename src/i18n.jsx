import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      aboutTitle: "About me",

      aboutText:
        "I studied technological high school at UTU and have a self-taught profile in the world of programming. I am very curious, which drives meto develop in different tasks or areas within the IT field. Due to the aforementioned, my focus is to gain work experience that offers continuous learning and development. Additionally, I consider myself to be efficient and quick to learn. On the other hand, I am highly adaptable, which is why I emphasize my versatility and willingness to integrate into various work structures and modalities, both in team settings and individual work. Once again, I highlight my strong interest in deepening and focusing my knowledge.",

      titleTable: "Projects",

      navHome: "Home",

      navAbout: "About me",

      navProject: "Projects",

      homeDesc: "Junior Developer",

      projectTitle: "Stock management project",

      projectSub: "TECHNOLOGIES USED: REACT.JS, SPRING BOOT, POSTGRESQL, REDUX",

      projectDesc:
        "Stock management project aimed at achieving better inventory control.",

      DescMove: "You can drag the items to swap their positions.",

      stockProjTitle1: "Project Purpose",

      stockProjTitle2: "Problem It Solves",

      stockProjTitle3: "Specific Role",

      stockProjDesc1:
        "This project involves the development of a stock and sales management system for small and medium-sized businesses. The main goal is to optimize inventory control by automating the recording of sales and the adjustment of available stock in an efficient and simple manner. Additionally, the system includes functionality to log each transaction, allowing for detailed reports on sales and the current state of inventory.",

      stockProjDesc2:
        "Many small businesses face challenges with manual inventory control, which can lead to stock errors, unregistered sales, or even product loss. This system aims to address these issues by enabling automatic sales recording, real-time inventory adjustments, and report generation, helping business owners make informed decisions and improve operational efficiency.",

      stockProjDesc3:
        "As the lead developer, I was responsible for designing and implementing the system, creating the database to manage inventory and sales transactions, and developing the user interface to facilitate interaction. I also implemented the logic for generating sales reports and automatic stock updates, ensuring data integrity and accuracy. Furthermore, I conducted testing and optimized the user experience to make it as seamless as possible.",

      stockProj1:
        "When no products are registered, the homepage will look like this in light mode",

      stockProj2:
        "In dark mode, the homepage without products will be displayed as follows",

      stockProj3: "This is the window for adding a new product",

      stockProj4:
        "Once registered, the products will appear on the homepage like this",

      stockProj5: "This is the product editing window",

      stockProj6: "This is how the product deletion window will look",

      stockProj7:
        "The search bar allows you to find products by name and works as follows",

      stockProj8: "This is the New Sale section",

      stockProj9:
        "When typing in the search bar, a list of matching products will be displayed; selecting them will add them to the sale",

      stockProj10:
        "The products added to the sale will be displayed as follows",

      stockProj11:
        "When confirming the purchase, this window will appear if the transaction is successful",

      stockProj12: "This is the sales history section",

      stockProj13:
        "When selecting a sales record, the transaction details will be displayed",

      stockProj14:
        "It is possible to search for a sale by ID or date; this is an example of an ID search",

      stockProj15: "This is an example of a date search",

      footerTitle: "This portfolio was built using React.",

      footerSub: "Click here to view the source code.",

      technologies: "TECHNOLOGIES",

      skills: "SKILLS",

      contact: "Contact",

      contactSub: "Feel free to contact me with any questions!",

      projectTitle2: "Stock and Sales Management Project",

      projectSub2: "TECHNOLOGIES USED: REACT.JS, SPRING BOOT, POSTGRESQL",

      projectDesc2:
        "Project focused on optimizing inventory control and the sales process.",
    },
  },
  es: {
    translation: {
      aboutTitle: "Sobre mi",

      aboutText:
        "Estudié bachillerato tecnológico en UTU y tengo un perfil autodidacta en el mundo de la programación, soy muy curioso, lo que me impulsa a desarrollarme en diferentes tareas o áreas dentro del ámbito de TI; por lo tanto, mi objetivo es adquirir experiencia laboral que ofrezca aprendizaje continuo y desarrollo; además, me considero eficiente y rápido para aprender, altamente adaptable, lo que me permite resaltar mi versatilidad y disposición para integrarme en diversas estructuras y modalidades de trabajo, tanto en equipo como de manera individual, destacando mi fuerte interés en profundizar y enfocar mis conocimientos.",

      titleTable: "Proyectos",

      navHome: "Inicio",

      navAbout: "Sobre mi",

      navProject: "Proyectos",

      homeDesc: "Desarrollador Junior",

      projectTitle: "Proyecto de gestión de stock",

      projectSub:
        "TECNOLOGÍAS UTILIZADAS: REACT.JS, SPRING BOOT, POSTGRESQL, REDUX",

      projectDesc:
        "Proyecto de gestión de inventario destinado a lograr un mejor control del inventario.",

      DescMove: "Podés arrastrar los elementos para intercambiarlos de lugar.",

      stockProjTitle1: "Propósito del Proyecto",

      stockProjTitle2: "Problema que Resuelve",

      stockProjTitle3: "Rol Específico",

      stockProjDesc1:
        "Este proyecto consiste en el desarrollo de un sistema de gestión de stock y ventas para pequeñas y medianas empresas. El objetivo principal es optimizar el control de inventarios, automatizando el registro de ventas y el ajuste de los productos disponibles en stock, de manera eficiente y sencilla. Además, se incluye una funcionalidad para registrar cada transacción realizada, lo que permite obtener informes detallados de las ventas y del estado actual del inventario.",

      stockProjDesc2:
        "Muchos comercios pequeños enfrentan dificultades en el control manual del inventario, lo que puede generar errores de stock, ventas sin registrar o, incluso, la pérdida de productos. Este sistema busca resolver esos problemas al permitir el registro automático de las ventas, el ajuste de inventarios en tiempo real y la generación de reportes, ayudando a los dueños de negocios a tomar decisiones informadas y a mejorar la eficiencia operativa.",

      stockProjDesc3:
        "Como desarrollador principal, fui responsable del diseño y la implementación del sistema, creando la base de datos para gestionar el inventario y las transacciones de ventas, y desarrollando la interfaz de usuario para facilitar la interacción. Además, implementé la lógica para generar reportes de ventas y actualizaciones automáticas de stock, asegurando la integridad y precisión de los datos. También me encargué de realizar pruebas y de optimizar la experiencia de usuario para hacerla lo más fluida posible.",

      stockProj1:
        "Cuando no hay productos registrados, la página de inicio se verá así en el tema claro",

      stockProj2:
        "En modo oscuro, la página de inicio sin productos se visualizará de la siguiente manera",

      stockProj3: "Esta es la ventana para agregar un nuevo producto",

      stockProj4:
        "Una vez registrados, los productos aparecerán en la página de inicio de esta manera",

      stockProj5: "Esta es la ventana de edición de un producto",

      stockProj6: "Así se verá la ventana para eliminar un producto",

      stockProj7:
        "La barra de búsqueda permite encontrar productos por nombre y funciona de la siguiente manera",

      stockProj8: "Esta es la sección de Nueva Venta",

      stockProj9:
        "Al escribir en la barra de búsqueda, se mostrará una lista con los productos que coincidan; al seleccionarlos, se agregarán a la venta",

      stockProj10:
        "Los productos agregados a la venta se mostrarán de la siguiente manera",

      stockProj11:
        "Al confirmar la compra, esta ventana aparecerá si la transacción es exitosa",

      stockProj12: "Esta es la sección de historial de ventas",

      stockProj13:
        "Al seleccionar un registro de venta, se desplegarán los detalles de la transacción",

      stockProj14:
        "Es posible buscar una venta por ID o fecha; este es un ejemplo de búsqueda por ID",

      stockProj15: "Este es un ejemplo de búsqueda por fecha",

      footerTitle: "Este portfolio fue desarrollado con React.",

      footerSub: "Hacé clic aquí para ver el código fuente.",

      technologies: "TECNOLOGÍAS",

      skills: "HABILIDADES",

      contact: "Contacto",

      contactSub: "No dudes en contactarme para cualquier consulta!",

      projectTitle2: "Proyecto de gestión de stock y ventas",

      projectSub2: "TECNOLOGÍAS UTILIZADAS: REACT.JS, SPRING BOOT, POSTGRESQL",

      projectDesc2:
        "Proyecto de gestión de stock y ventas enfocado en optimizar el control de inventarios y el proceso comercial.",
    },
  },
  pt: {
    translation: {
      aboutTitle: "Sobre mim",

      aboutText:
        "Estudei ensino médio tecnológico na UTU e tenho um perfil autodidata no mundo da programação, sou muito curioso, o que me impulsiona a me desenvolver em diferentes tarefas ou áreas dentro do campo de TI; por isso, meu foco é ganhar experiência de trabalho que ofereça aprendizado contínuo e desenvolvimento; além disso, me considero eficiente e rápido para aprender, altamente adaptável, o que me permite destacar minha versatilidade e disposição para me integrar em diversas estruturas e modalidades de trabalho, tanto em equipe quanto individualmente, destacando meu forte interesse em aprofundar e focar meus conhecimentos.",

      titleTable: "projetos",

      navHome: "Início",

      navAbout: "Sobre mim",

      navProject: "Projetos",

      homeDesc: "Desenvolvedor Junior",

      projectTitle: "Projeto de gerenciamento de estoque",

      projectSub:
        "TECNOLOGIAS UTILIZADAS : REACT.JS, SPRING BOOT, POSTGRESQL, REDUX",

      projectDesc:
        "Projeto de gerenciamento de estoque com o objetivo de alcançar um melhor controle do inventário.",

      DescMove: "Você pode arrastar os itens para trocar de lugar entre si.",

      stockProjTitle1: "Propósito do Projeto",

      stockProjTitle2: "Problema que Resolve",

      stockProjTitle3: "Papel Específico",

      stockProjDesc1:
        "Este projeto consiste no desenvolvimento de um sistema de gestão de estoque e vendas para pequenas e médias empresas. O objetivo principal é otimizar o controle de inventário, automatizando o registro de vendas e o ajuste dos produtos disponíveis em estoque de forma eficiente e simples. Além disso, o sistema inclui uma funcionalidade para registrar cada transação realizada, permitindo a obtenção de relatórios detalhados sobre as vendas e o estado atual do inventário.",

      stockProjDesc2:
        "Muitos pequenos comércios enfrentam dificuldades no controle manual do inventário, o que pode gerar erros de estoque, vendas não registradas ou até a perda de produtos. Este sistema busca resolver esses problemas ao permitir o registro automático das vendas, o ajuste de estoques em tempo real e a geração de relatórios, ajudando os donos de negócios a tomarem decisões informadas e a melhorarem a eficiência operacional.",

      stockProjDesc3:
        "Como desenvolvedor principal, fui responsável pelo design e implementação do sistema, criando o banco de dados para gerenciar o inventário e as transações de vendas, além de desenvolver a interface do usuário para facilitar a interação. Também implementei a lógica para gerar relatórios de vendas e atualizações automáticas de estoque, garantindo a integridade e a precisão dos dados. Além disso, realizei testes e otimizei a experiência do usuário para torná-la o mais fluida possível.",

      stockProj1:
        "Quando nenhum produto estiver registrado, a página inicial aparecerá assim no modo claro",

      stockProj2:
        "No modo escuro, a página inicial sem produtos será exibida da seguinte forma",

      stockProj3: "Esta é a janela para adicionar um novo produto",

      stockProj4:
        "Depois de registrados, os produtos aparecerão na página inicial desta forma",

      stockProj5: "Esta é a janela de edição de um produto",

      stockProj6: "É assim que a janela de exclusão de um produto será exibida",

      stockProj7:
        "A barra de pesquisa permite encontrar produtos pelo nome e funciona da seguinte forma",

      stockProj8: "Esta é a seção de Nova Venda",

      stockProj9:
        "Ao digitar na barra de pesquisa, uma lista com os produtos correspondentes será exibida; ao selecioná-los, eles serão adicionados à venda",

      stockProj10:
        "Os produtos adicionados à venda serão exibidos da seguinte forma",

      stockProj11:
        "Ao confirmar a compra, esta janela aparecerá se a transação for bem-sucedida",

      stockProj12: "Esta é a seção de histórico de vendas",

      stockProj13:
        "Ao selecionar um registro de venda, os detalhes da transação serão exibidos",

      stockProj14:
        "É possível buscar uma venda por ID ou data; este é um exemplo de busca por ID",

      stockProj15: "Este é um exemplo de busca por data",

      footerTitle: "Este portfólio foi desenvolvido com React.",

      footerSub: "Clique aqui para ver o código fonte.",

      technologies: "TECNOLOGIAS",

      skills: "HABILIDADES",

      contact: "Contato",

      contactSub: "Fique à vontade para me contatar para qualquer dúvida!",

      projectTitle2: "Projeto de controle de estoque e vendas",

      projectSub2: "TECNOLOGIAS UTILIZADAS: REACT.JS, SPRING BOOT, POSTGRESQL",

      projectDesc2:
        "Projeto focado em otimizar o controle de estoque e o processo de vendas.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "en", // Idioma predeterminado
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
