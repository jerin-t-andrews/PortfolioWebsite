import Image from "next/image";

interface IProps {
    path : string;
}

// Come back to this later to make dynamic Project Components
export default function Project(props : IProps) {    
    // Can attempt this with classnames library or merging (attempt later)
    // console.log(`ml-[${props.ml}rem] mt-[${props.mt}rem]`);
    // const mlClass = `ml-[${props.ml}rem] `;
    // const mtClass = `mt-[${props.mt}rem]`;
    // const combinedClass = mlClass + mtClass;

    return (
            <Image
                src={props.path}
                width = {100}
                height = {100}
                alt = ""
            />
    );
}