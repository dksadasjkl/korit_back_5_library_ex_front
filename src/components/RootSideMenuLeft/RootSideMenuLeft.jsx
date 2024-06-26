/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { button } from "../RightTopButton/style";
import { CiCircleMore } from "react-icons/ci";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";

function RootSideMenuLeft() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ islogin, setLogout] = useState(false);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");

    useEffect(() => {
        setLogout(() => principalQueryState.status === "success");
    }, [principalQueryState.status])

    

    const handleCloseClick = () => {
        setShow(() => false);
    }

    return (
        <div css={s.layout(show)}>
            <div css={s.header}>
                <button css={s.menuButton} onClick={handleCloseClick}>
                    <HiMenu />
                </button>
            </div>

            <div css={s.profile}>
                { !islogin 
                ?  <button css={s.b0} >로 그 인</button>  
                : <div css={s.profile2}>
                    <button css={s.b1}><CiCircleMore /></button>
                    <button css={s.profileButton}>
                        <FiUser />
                    </button>
                    <button css={s.b2}>{principalQueryState.data.data.username}</button>
                    <button css={s.b3}>{principalQueryState.data.data.email}</button>
                </div>
                }
            </div>

            <div css={s.menuList}>
                <Link css={s.menuLink}>
                    도서 검색
                </Link>
            </div>
        </div>
    );
}

export default RootSideMenuLeft;