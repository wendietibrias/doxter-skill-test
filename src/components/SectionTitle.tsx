
type SectionTitleProps = {
    title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <header className="section--title">
          <h3>{title}</h3>
        </header>
    )
}

export default SectionTitle;