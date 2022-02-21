import house from "../../icons/house.svg";
import folder from "../../icons/folder.svg";
import book from "../../icons/book.svg";
import contact from "../../icons/contact.svg";
import profile from "../../icons/profile.svg";

const Settings = () => {
  // TODO: Mudar pra YAML
  const pages = [
    { title: "Início", link: "/", img: house },
    { title: "Projetos", link: "/projects", img: folder },
    {
      title: "Blog",
      link: "/blog",
      img: book,
      subpages: [
        {
          slug: "computing",
          category: "Computação",
        },
        {
          slug: "control-systems",
          category: "Sistemas de controle",
        },
        {
          slug: "electric-machines",
          category: "Máquinas Elétricas",
        },
        {
          slug: "electronic",
          category: "Eletrônica",
        },
      ],
    },
    { title: "Contato", link: "/contact", img: contact },
    { title: "Sobre", link: "/about", img: profile },
  ];

  return pages;
};

export default Settings;
