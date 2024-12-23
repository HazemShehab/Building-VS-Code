interface Iprops extends React.ImgHTMLAttributes<HTMLImageElement>{
    src: string,
    className?: string
}

const IconImg = ({src, className = "w-5 h-5",...rest} : Iprops) => {
    return (
    <img src={src} className={className} {...rest}/>
)};

export default IconImg;