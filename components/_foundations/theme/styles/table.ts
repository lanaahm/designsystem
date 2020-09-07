import { themeGet } from '@styled-system/theme-get';
import { themeProps } from '../../../Theme';
import { css } from 'styled-components';

const table = css`
  /* Table */
  table {
    border-spacing: 0;
    border-collapse: collapse;
  }
  td,
  th {
    padding: 0;
  }
  table {
    background-color: transparent;
  }
  th {
    text-align: left;
  }

  /* Cell Background Shape */
  .bcc-react-bootstrap-table-RoundedTop {
    ${themeGet('border', themeProps.table.border)};
    border-radius: ${themeGet('roundedTop', themeProps.table.typeTable.roundedTop)};
  }
  .bcc-react-bootstrap-table-Sharp {
    ${themeGet('border', themeProps.table.border)};
    border-radius: ${themeGet('sharp', themeProps.table.typeTable.sharp)};
  }

  /* Text Table */
  .table {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 0.0025em;

    width: 100%;
    max-width: 100%;
    border-color: rgba(20, 48, 69, 0.08);
  }

  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > tfoot > tr > td,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th {
    height: 48px;
    /* padding: 14px auto 13px 12px; */
    padding-top: 14px;
    padding-bottom: 13px;
    padding-left: 16px;
    border-top: 1px solid;

    line-height: 21px;
    letter-spacing: 0.025em;
  }

  /* Header */
  .table > thead > tr > th {
    font-style: normal;
    font-weight: 500;

    /* padding: 23px auto 8px 16px; */
    padding-top: 23px;
    padding-bottom: 8px;
    padding-left: 16px;

    line-height: 17px;
    letter-spacing: 0.001em;
    vertical-align: bottom;
    color: #143045;
    border-bottom: 2px solid rgba(20, 48, 69, 0.08);
  }
  .table > thead > tr > th:focus {
    outline: none;
  }

  .table > tbody + tbody {
    border-top: 2px solid rgba(20, 48, 69, 0.08);
  }
  .table .table {
    background-color: #fff;
  }

  /* Table Bordered */
  .table > tbody > tr > td,
  .table > tbody > tr > th,
  .table > tfoot > tr > td,
  .table > tfoot > tr > th,
  .table > thead > tr > td,
  .table > thead > tr > th {
    ${themeGet('border', themeProps.table.border)};
  }
  .table > tbody > tr > td:first-child,
  .table > tbody > tr > th:first-child,
  .table > tfoot > tr > td:first-child,
  .table > tfoot > tr > th:first-child,
  .table > thead > tr > td:first-child,
  .table > thead > tr > th:first-child {
    border-left-width: 0;
  }
  .table > tbody > tr > td:last-child,
  .table > tbody > tr > th:last-child,
  .table > tfoot > tr > td:last-child,
  .table > tfoot > tr > th:last-child,
  .table > thead > tr > td:last-child,
  .table > thead > tr > th:last-child {
    border-right-width: 0;
  }
  .table > tbody > tr:last-child > td,
  .table > tbody > tr:last-child > th,
  .table > tfoot > tr:last-child > td,
  .table > tfoot > tr:last-child > th {
    border-bottom-width: 0;
  }
  .table > thead > tr > td,
  .table > thead > tr > th {
    border-bottom-width: 2px;
    border-top-width: 0px;
  }

  .table.bcc-table-borderedHorizontal > tbody > tr > td:first-child,
  .table.bcc-table-borderedHorizontal > tbody > tr > th:first-child,
  .table.bcc-table-borderedHorizontal > tfoot > tr > td:first-child,
  .table.bcc-table-borderedHorizontal > tfoot > tr > th:first-child,
  .table.bcc-table-borderedHorizontal > thead > tr > td:first-child,
  .table.bcc-table-borderedHorizontal > thead > tr > th:first-child {
    border-right-width: 0;
  }

  .table.bcc-table-borderedHorizontal > tbody > tr > td,
  .table.bcc-table-borderedHorizontal > tbody > tr > th,
  .table.bcc-table-borderedHorizontal > tfoot > tr > td,
  .table.bcc-table-borderedHorizontal > tfoot > tr > th,
  .table.bcc-table-borderedHorizontal > thead > tr > td,
  .table.bcc-table-borderedHorizontal > thead > tr > th {
    border-left-width: 0;
    border-right-width: 0;
  }

  .table.bcc-table-borderedHorizontal > tbody > tr > td:last-child,
  .table.bcc-table-borderedHorizontal > tbody > tr > th:last-child,
  .table.bcc-table-borderedHorizontal > tfoot > tr > td:last-child,
  .table.bcc-table-borderedHorizontal > tfoot > tr > th:last-child,
  .table.bcc-table-borderedHorizontal > thead > tr > td:last-child,
  .table.bcc-table-borderedHorizontal > thead > tr > th:last-child {
    border-left-width: 0;
  }

  /* Table Condensed */
  .table.bcc-table-condensed > tbody > tr > td,
  .table.bcc-table-condensed > tbody > tr > th,
  .table.bcc-table-condensed > tfoot > tr > td,
  .table.bcc-table-condensed > tfoot > tr > th,
  .table.bcc-table-condensed > thead > tr > td,
  .table.bcc-table-condensed > thead > tr > th {
    height: 40px;

    /* padding: 10px auto 9px 16px; */
    padding-top: 10px;
    padding-bottom: 9px;
    padding-left: 16px;
  }
  .table.bcc-table-condensed > thead > tr > th {
    /* padding: 15px auto 8px 16px; */
    padding-top: 23px;
    padding-bottom: 8px;
    padding-left: 16px;
  }

  /* Table Relaxed */
  .table.bcc-table-relaxed > tbody > tr > td,
  .table.bcc-table-relaxed > tbody > tr > th,
  .table.bcc-table-relaxed > tfoot > tr > td,
  .table.bcc-table-relaxed > tfoot > tr > th,
  .table.bcc-table-relaxed > thead > tr > td,
  .table.bcc-table-relaxed > thead > tr > th {
    height: 56px;

    /* padding: 18px auto 17px 16px; */
    padding-top: 18px;
    padding-bottom: 17px;
    padding-left: 16px;
  }
  .table.bcc-table-relaxed > thead > tr > th {
    /* padding: 31px auto 8px 16px; */
    padding-top: 31px;
    padding-bottom: 8px;
    padding-left: 16px;
  }

  /* Table Striped */
  .table.bcc-table-striped > tbody > tr:nth-of-type(odd) {
    background-color: ${themeGet('striped', themeProps.table.row.striped)};
  }
  .bcc-table-hover > tbody > tr:hover {
    background-color: #f5f5f5;
  }

  /* Table Selection */
  .table.bcc-table-selection > thead > tr > th.selection-cell-header,
  .table.bcc-table-selection > tbody > tr > td.selection-cell {
    width: 30px;
    min-width: 30px;

    text-align: center;
    vertical-align: bottom;
    padding-right: 0 !important;
    border-right-width: 0;
  }
  .table.bcc-table-selection > thead > tr > th.selection-cell-header > input[type='checkbox'],
  .table.bcc-table-selection > thead > tr > th.selection-cell-header > input[type='radio'],
  .table.bcc-table-selection > tbody > tr > td.selection-cell > input[type='checkbox'],
  .table.bcc-table-selection > tbody > tr > td.selection-cell > input[type='radio'] {
    padding: 0;
    margin: 0;
    position: relative;
    vertical-align: bottom;
    bottom: 1px;
  }

  .table.bcc-table-selection > tbody > tr > td.selection-cell,
  .table.bcc-table-selection > tbody > tr > td.selection-cell > input[type='checkbox'],
  .table.bcc-table-selection > tbody > tr > td.selection-cell > input[type='radio'] {
    vertical-align: middle;
  }

  .table.bcc-table-selection > thead > tr > th:nth-of-type(2),
  .table.bcc-table-selection > tbody > tr > td:nth-of-type(2) {
    border-left-width: 0;
  }

  th.sortable {
    position: relative;
  }
  .bcc-table-iconSort {
    position: absolute;
    right: 0;
    padding-right: 16px;
  }

  // Pagination
  .bcc-table-pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 10px;
    padding-bottom: 5px;
    font-size: 12px;
    color: #000000;
    ${themeGet('border', themeProps.table.border)};
    border-top-width: 0;
  }

  .bcc-table-pagination-selectRow {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .bcc-table-pagination-controlPage {
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .bcc-table-pagination-controlPage ul.pagination.react-bootstrap-table-page-btns-ul {
    padding: 0;
    margin-left: 24px;
    display: flex;
    justify-content: space-between;
    width: 50px;
  }
`;
console.log(themeGet('border.bordered', themeProps.table.border));
export default table;
