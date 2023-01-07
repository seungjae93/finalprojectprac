import React, { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import TotalModal from "../components/MapModal/TotalModal";
import SubModal from "../components/MapModal/SubModal";
import { throttle } from "lodash";
const { kakao } = window;

// 주소 입력후 검색 클릭 시 원하는 주소로 이동시키기
const MainMap = () => {
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.450705, lng: 126.570677 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
  });
  const [modalOpen, setModalOpen] = useState(false);

  const positions = [
    {
      title: "카카오",
      latlng: { lat: 33.450705, lng: 126.570677 },
    },
    {
      title: "생태연못",
      latlng: { lat: 33.450936, lng: 126.569477 },
    },
    {
      title: "텃밭",
      latlng: { lat: 33.450879, lng: 126.56994 },
    },
    {
      title: "근린공원",
      latlng: { lat: 33.451393, lng: 126.570738 },
    },
  ];

  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  const [searchAddress, SetSearchAddress] = useState("");

  const geocoder = new kakao.maps.services.Geocoder();

  let callback = function (result, status) {
    if (status === kakao.maps.services.Status.OK) {
      const newSearch = result[0];
      setState({
        center: { lat: newSearch.y, lng: newSearch.x },
      });
    }
  };
  //검색시 리렌더링 줄이기
  // const handleSearchAddress = (e) => {
  //   SetSearchAddress(e.target.value);
  // };

  const onAddressHandler = throttle((e) => {
    const { value } = e.target;

    searchAddress(value);
    // SetSearchAddress(e.target.value);
    // console.log(searchAddress);
    // geocoder.addressSearch(`${searchAddress}`, callback);
  }, 500);
  // const onSearchHandler = useCallback(() => {
  //   geocoder.addressSearch(`${searchAddress}`, callback);
  // }, [searchAddress]);

  const onSearchHandler = useCallback(() => {
    geocoder.addressSearch(`${searchAddress}`, callback);
  }, [searchAddress]);

  // const onSearchHandler = () => {
  //   geocoder.addressSearch(`${searchAddress}`, callback);

  // };

  return (
    <>
      {modalOpen && <TotalModal modalHandler={modalHandler} />}
      {modalOpen && <SubModal modalHandler={modalHandler} />}
      <StContainer>
        <input type="text" onChange={onAddressHandler}></input>
        <button onClick={onSearchHandler}>검색</button>
        <StMapContainer>
          <Map // 지도를 표시할 Container
            center={{
              // 지도의 중심좌표
              lat: state.center.lat,
              lng: state.center.lng,
            }}
            isPanto={state.isPanto}
            style={{
              // 지도의 크기
              width: "100%",
              height: "100%",
            }}
            level={3} // 지도의 확대 레벨
          >
            {positions.map((position) => {
              return (
                <MapMarker
                  key={`${position.title}-${position.latlng}`}
                  position={position.latlng}
                  image={{
                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                    size: {
                      width: 24,
                      height: 35,
                    }, // 마커이미지의 크기입니다
                  }}
                  title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                  onClick={modalHandler}
                />
              );
            })}
          </Map>
        </StMapContainer>
      </StContainer>
    </>
  );
};
export default MainMap;

const StContainer = styled.div`
  max-width: 1920px;
  min-width: 680px;
  height: 855px;
`;
const StMapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
