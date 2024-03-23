
type SectionTitleProps = {
    title: string;
    sub?:string;
}

const SectionTitle = ({ title,sub }: SectionTitleProps) => {
    return (
        <header className="section--title">
          <h3>{title}</h3>
        </header>
    )
}

export default SectionTitle;