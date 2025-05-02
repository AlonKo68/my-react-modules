import CatProfile from '../CatProfile/CatProfile';

export default function CatList({itemsCat}) { 
    return (
        <ul>
            {itemsCat.map((item) => (
                <li key={item.id}>
                    <CatProfile cats={item} />
                </li>
            ))}
        </ul>
    );
};