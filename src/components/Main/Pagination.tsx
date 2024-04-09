import styled from "styled-components";
import { generation } from "../../constants/generation";

interface PaginationProps {
  itemsPerPage: number;
  gene: number;
  onPageChange: (page: number) => void;
}
const Pagination = ({ itemsPerPage, gene, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(
    (generation[gene] - generation[gene - 1]) / itemsPerPage
  );
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  const generatePageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => {
            handleClick(i);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return <PaginationStyle>{generatePageNumbers()}</PaginationStyle>;
};

const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  button {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #000;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
`;

export default Pagination;
