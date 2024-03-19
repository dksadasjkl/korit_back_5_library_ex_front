import React, { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { principalState } from '../atoms/principalAtom';
import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import { getPrincipalRequest } from '../apis/api/principal';
import { useQuery } from 'react-query';
import RootSideMenuLeft from '../components/RootSideMenuLeft/RootSideMenuLeft';
import RootSideBar from '../components/RootSideMenuLeft/RootSideBar';
import RootHeader from '../components/RootHeader/RootHeader';
import { GridLoader } from 'react-spinners';
import FullSizeLoader from '../components/FullSizeLoader/FullSizeLoader';
import MyPage from '../pages/MyPage/MyPage';
import PageContainer from '../components/PageContainer/PageContainer';

// useQuery => Get 요청 시에 사용 -> 전역상태
// 첫번째 매개변수 => 배열 ["key값", dependency]
// 두번째 매개변수 => 요청메소드(async, await)
// 세번재 매개변수 => 옵션
/*
    {
        retry: 0,
        refetchOrWindowFocus: false,
        onSuccess: 함수,
        onError: 함수,
        anabled: true or false

    }

*/

function AuthRoute() {


    const principalQuery = useQuery(["principalQuery"], getPrincipalRequest,
    {   
        retry: 0,
        refetchOnWindowFocus: false,
        onSuccess: response => {
            console.log("onSuccess");
            console.log(response)
        },
        onError: error => {
            console.log("오류");
            console.log(error)
        }
    });
    // getPrincipal.isLoading -> false -> true -> getPrincipal 렌더링 ->
    return (
        <>
            {/* <RootSideMenuLeft /> */}
            <RootSideBar />
            <RootHeader />
            <PageContainer>
                {
                    principalQuery.isLoading 
                    ? <FullSizeLoader size={30}/>
                    : <Routes>
                        <Route path="/auth/*" element={ <AuthPage /> } />  
                        <Route path="/" element={ <HomePage /> } />
                        <Route path="/account/mypage" element={ <MyPage /> } />
                    </Routes>
                }
            </PageContainer>
        </>
    );
}

export default AuthRoute;