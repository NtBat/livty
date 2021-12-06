import * as S from "./styles";

function Button({ link, title, color, icon }) {
  return (
    <S.Link href={link} color={color} title={title}>
      {icon && <S.Icon src={icon} alt={title} title={title} />}
      {title}
    </S.Link>
  );
}

export default Button;
