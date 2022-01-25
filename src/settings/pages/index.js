import house from "../../icons/house.svg";
import folder from "../../icons/folder.svg";
import book from "../../icons/book.svg";
import contact from "../../icons/contact.svg";
import profile from "../../icons/profile.svg";

const Settings = () => {
  const pages = [
    { title: "Início", link: "/", img: house },
    { title: "Projetos", link: "/projects", img: folder },
    {
      title: "Blog",
      link: "/blog",
      img: book,
      subpages: [
        { title: "Categoria 1", atributo: "valor 1", slug: "categoria-1" },
        { title: "Categoria 2", atributo: "valor 2", slug: "categoria-2" },
        { title: "Categoria 3", atributo: "valor 3", slug: "categoria-3" },
      ],
    },
    { title: "Contato", link: "/contact", img: contact },
    { title: "Sobre", link: "/about", img: profile },
  ];

  return pages;
};

export default Settings;
