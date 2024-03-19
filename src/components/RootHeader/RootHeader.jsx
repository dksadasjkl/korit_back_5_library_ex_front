/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import * as s from "./style";
import { HiMenu } from "react-icons/hi";
import { menuState } from "../../atoms/menuAtom";
import { Link } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";
import { principalState } from "../../atoms/principalAtom";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import instance from "../../apis/utils/instance";

function RootHeader() {
    const [ show, setShow ] = useRecoilState(menuState);
    const [ isLogin, setLogin ] = useState(false);
    const queryClient = useQueryClient();
    const principalQueryState = queryClient.getQueryState("principalQuery");
    
    
    useEffect(() => {
        setLogin(() => principalQueryState.status === "success");
    }, [principalQueryState.status])
    // status:  idle -> success or error

    

    const handleOpenClick = (e) => {
        e.stopPropagation();
        setShow(() => true);
    }

    const handleLogoutClick = () => {
        localStorage.removeItem("AccessToken") // token 제거
        instance.interceptors.request.use(confirm => { 
            confirm.headers.Authorization = null;
            return confirm;
        });
        // instance에 만들어진 값을 axios null로 
        queryClient.refetchQueries("principalQuery") // useQuery() 재요청

    }
    

    return (
        <div css={s.header}>
            <button css={s.menuButton} onClick={handleOpenClick}>
                <HiMenu />
            </button>
          
            { 
                !isLogin
                ? <Link css={s.account} to={"/auth/signin"}>
                    <FiUser />
                </Link>
                : 
                <div css={s.accountItems}>
                    <button css={s.logout} onClick={handleLogoutClick}>
                        <FiLogOut />
                    </button>
                    <Link css={s.account} to={"/account/mypage"}>
                        <FiUser />
                    </Link>
                </div>
            }

        </div>
    );
}

export default RootHeader;