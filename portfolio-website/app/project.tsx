import Image from "next/image";

interface IProps {
    path : string;
}

export default function Project(props : IProps) {    
    // Can attempt this with classnames library or merging (attempt later)
    // console.log(`ml-[${props.ml}rem] mt-[${props.mt}rem]`);
    // const mlClass = `ml-[${props.ml}rem] `;
    // const mtClass = `mt-[${props.mt}rem]`;
    // const combinedClass = mlClass + mtClass;

    return (
        // "flex w-screen justify-center "
        <div className={`relative flex w-screen justify-center`}>
            <Image
                className="-ml-[100rem]"
                src={props.path}
                width = {100}
                height = {100}
                alt = ""
            />
        </div>
    );
}