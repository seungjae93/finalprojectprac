import React, { useEffect, useState } from "react";
import styled from "styled-components";

const wholeTextArray = [
  "apple",
  "alert",
  "javascript",
  "프리온보딩",
  "프론트엔드",
  "java",
  "jain",
];

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [isHaveInputValue, setIsHaveInputValue] = useState(false);
  const [dropDownList, setDropDownList] = useState(wholeTextArray);
  const [dropDownItemIndex, setDropDownItemIndex] = useState(-1);

  const showDropDownList = () => {
    if (inputValue === "") {
      setIsHaveInputValue(false);
      setDropDownList([]);
    } else {
      const choosenTextList = wholeTextArray.filter((textItem) =>
        textItem.includes(inputValue)
      );
      setDropDownList(choosenTextList);
    }
  };

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    setIsHaveInputValue(true);
  };

  const clickDropDownItem = (clickedItem) => {
    setInputValue(clickedItem);
    setIsHaveInputValue(false);
  };

  const handleDropDownKey = (e) => {
    //input에 값이 있을때만 작동
    if (isHaveInputValue) {
      if (
        e.key === "ArrowDown" &&
        dropDownList.length - 1 > dropDownItemIndex
      ) {
        setDropDownItemIndex(dropDownItemIndex + 1);
      }

      if (e.key === "ArrowUp" && dropDownItemIndex >= 0)
        setDropDownItemIndex(dropDownItemIndex - 1);
      if (e.key === "Enter" && dropDownItemIndex >= 0) {
        clickDropDownItem(dropDownList[dropDownItemIndex]);
        setDropDownItemIndex(-1);
      }
    }
  };

  useEffect(showDropDownList, [inputValue]);

  return (
    <WholeBox>
      <InputBox isHaveInputValue={isHaveInputValue}>
        <Input
          type="text"
          value={inputValue}
          onChange={changeInputValue}
          onKeyUp={handleDropDownKey}
        />
        <DeleteButton onClick={() => setInputValue("")}>&times;</DeleteButton>
      </InputBox>
      {isHaveInputValue && (
        <DropDownBox>
          {dropDownList.length === 0 && (
            <DropDownItem>해당하는 단어가 없습니다</DropDownItem>
          )}
          {dropDownList.map((dropDownItem, dropDownIndex) => {
            return (
              <DropDownItem
                key={dropDownIndex}
                onClick={() => clickDropDownItem(dropDownItem)}
                onMouseOver={() => setDropDownItemIndex(dropDownIndex)}
                className={
                  dropDownItemIndex === dropDownIndex ? "selected" : ""
                }
              >
                {dropDownItem}
              </DropDownItem>
            );
          })}
        </DropDownBox>
      )}
    </WholeBox>
  );
};

const activeBorderRadius = "16px 16px 0 0";
const inactiveBorderRadius = "16px 16px 16px 16px";

const WholeBox = styled.div`
  z-index: 60;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${(props) =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 60;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  z-index: 60;
`;

const DeleteButton = styled.div`
  cursor: pointer;
`;

const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 60;
`;

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
`;

export default AutoComplete;
