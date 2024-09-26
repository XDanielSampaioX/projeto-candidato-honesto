import { useContext } from "react";
import DisLike from "../assets/DisLike";
import Like from "../assets/Like";
import LikeAndDisLikeContext from "../contexts/LikeAndDisLikeContext";

export default function LikeAndDisLike(candidato: Candidato) {
    const { like, disLike, patchLike, patchDisLike } = useContext(LikeAndDisLikeContext);

    return (
            <div className="flex items-center justify-center gap-2">
                <button className="w-full" onClick={() => patchLike(candidato)}>
                    <div className="flex p-2 justify-center gap-2 bg-blue-800 text-white rounded-md">
                        <Like />
                        {like}
                    </div>
                </button>
                <button className="w-full" onClick={() => patchDisLike(candidato)}>
                    <div className="flex p-2 justify-center gap-2 bg-red-700 text-white rounded-md">
                        <DisLike />
                        {disLike}
                    </div>
                </button>
            </div>
    );
}