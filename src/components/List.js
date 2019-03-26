import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
`;

const List = ({ className, items, children }) => {
  return (
    <ListWrapper className={className}>
      {items.map(item => children(item))}
    </ListWrapper>
  );
};

export default List;
