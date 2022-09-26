import React, { Suspense } from 'react';
import useNearScreen from '../../hooks/useNearScreen';
import Spinner from '../../components/Spinner/Spinner';

const TrendingSearch = React.lazy(
    () => import('./TrendingSearch')
)

export default function LazyTrending(){
    const {isNearScreen, fromRef} = useNearScreen({distance: '0px'})


    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearch /> : <Spinner/>}
        </Suspense>
    </div>
}