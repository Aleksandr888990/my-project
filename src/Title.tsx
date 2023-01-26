

type Props = {
    text: string
}

const Title = (props: Props) => {
    console.log(props)
    return <h1>Hello {props.text}</h1>
}

export default Title
