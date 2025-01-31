import "./CustomCard.css";

type CustomCardProps = {
  title: string;
  linkName: string;
  link: string;
  img: string;
  children?: React.ReactNode;
};

export default function CustomCard({
  children,
  title,
  linkName,
  link,
  img,
}: CustomCardProps) {
  return (
    <div className="customCard__container bg-[#3A6150]">
      <div></div>
      <img src={img} alt="card image" className="customCard__image" />

      <div className="customCard__content text-white">
        <h4 className=" font-bold text-lg mb-3">{title}</h4>
        {children && children}
        <a className=" underline" href={link}>
          {linkName}
        </a>
      </div>
    </div>
  );
}
