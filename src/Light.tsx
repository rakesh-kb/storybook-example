type Props = {
    variant?: 'green' | 'yellow' | 'red';
}

const Light = ({variant = 'green'}: Props) => {
  return (
    <div
        style={{
            padding: 20,
            background: variant,
            width: 20,
            height: 20,
            borderRadius: '50%'
        }}>

    </div>
  )
}

export default Light