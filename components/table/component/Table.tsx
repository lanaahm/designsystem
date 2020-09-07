import * as React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../../config-provider';

import BootstrapTable, { BootstrapTableProps } from 'react-bootstrap-table-next';
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
  PaginationTotalStandalone,
  SizePerPageDropdownStandalone,
} from 'react-bootstrap-table2-paginator';
import Select, { components } from 'react-select';

import { ExpandAltOutlined, UpOutlined, DownOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { themeProps } from '../../Theme';

export interface TableProps extends Pick<BootstrapTableProps, 'classes' | 'columns' | 'keyField' | 'data'> {
  shape?: 'Rounded Top' | 'Sharp';
  prefixCls?: string;
  borderedVertical?: boolean;
  hover?: boolean;
  striped?: boolean;
  condensed?: boolean;
  relaxed?: boolean;
  sorted?: boolean;
  selection?: boolean | any;
  pagin?: number[];
}

const Table: React.FC<TableProps> = ({
  classes,
  shape = 'Rounded Top',
  borderedVertical = true,
  data,
  columns,
  hover,
  striped,
  condensed,
  relaxed,
  sorted = false,
  selection = false,
  pagin,
  ...props
}) => {
  const { prefixCls: customizePrefixCls } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixWrapperCls = getPrefixCls('react-bootstrap-table', customizePrefixCls);
  const prefixCls = getPrefixCls('table', customizePrefixCls);
  if (sorted) {
    columns.map(obj => {
      if (obj.sort === undefined || null) {
        (obj.sort = true),
          // @ts-ignore
          (obj.sortCaret = (order: string, _column: any) => {
            if (!order) return <ExpandAltOutlined rotate={135} className="bcc-table-iconSort" />;
            else if (order === 'asc') return <UpOutlined className="bcc-table-iconSort" />;
            else if (order === 'desc') return <DownOutlined className="bcc-table-iconSort" />;
          });
      }
    });
  }

  if (selection) {
    selection = [];
    selection['mode'] = 'checkbox';
    selection['clickToSelect'] = true;
    selection['selectionRenderer'] = ({ mode, ...rest }) => <input type={mode} {...rest} />;
    selection['style'] = { backgroundColor: `${themeProps.table.row.selected}` };
  } else {
    selection = undefined;
  }

  if (pagin) {
    const customTotal = (from, to, size) => (
      <span>
        {from}-{to} of {size}
      </span>
    );

    const style = {
      control: base => ({
        ...base,
        border: 0,
        // This line disable the blue border
        boxShadow: 'none',
        width: '55px',
        color: 'red',
      }),
      valueContainer: base => ({
        ...base,
        padding: 0,
        width: 'auto',
        justifyContent: 'center',
      }),
      indicatorSeparator: () => ({ display: 'none' }),
      dropdownIndicator: defaultStyles => ({
        ...defaultStyles,
        padding: 0,
        color: '#000', // your changes to the arrow
        transform: 'translate(-7px,0)',
        fontSize: '12px',
        '&:hover': {
          color: '#000',
        },
      }),
      singleValue: base => ({
        ...base,
        padding: 0,
        color: '#000',
      }),
      ValueContainer: base => ({
        ...base,
        padding: 0,
      }),
    };

    const mapItemPrePage = pagin.map(pgn => {
      const container = {};

      container['value'] = pgn;
      container['label'] = pgn;
      return container;
    });
    const DropdownIndicator = props => {
      return (
        <components.DropdownIndicator {...props}>
          <DownOutlined />
        </components.DropdownIndicator>
      );
    };
    const sizePerPageOptionRenderer = ({ onSizePerPageChange }) => {
      return (
        <div className="bcc-table-pagination-selectRow">
          <span>Rows per page : </span>
          <Select
            defaultValue={mapItemPrePage[0]}
            components={{ DropdownIndicator }}
            options={mapItemPrePage}
            styles={style}
            width="200px"
            isSearchable={false}
            onChange={e => onSizePerPageChange(e.value)}
          />
        </div>
      );
    };

    const pageButtonRenderer = ({ page, onPageChange }) => {
      const handleClick = e => {
        e.preventDefault();
        onPageChange(page);
      };

      if (typeof page !== 'number') {
        if (page == 'Back') return <LeftOutlined className="bcc-table-pagination-iconBack" onClick={handleClick} />;
        if (page == 'Next') return <RightOutlined className="bcc-table-pagination-iconNext" onClick={handleClick} />;
      }
      return undefined;
    };

    return (
      <div>
        <PaginationProvider
          pagination={paginationFactory({
            custom: true,
            totalSize: data.length,
            prePageText: 'Back',
            nextPageText: 'Next',
            showTotal: false,
            alwaysShowAllBtns: true,
            withFirstAndLast: false,
            hidePageListOnlyOnePage: false,
            paginationTotalRenderer: customTotal,
            sizePerPageRenderer: sizePerPageOptionRenderer,
            // @ts-ignore
            pageButtonRenderer,
            sizePerPage: mapItemPrePage[0]['value'],
          })}
        >
          {({ paginationProps, paginationTableProps }) => {
            const PaginantionList: typeof PaginationTotalStandalone = (props, paginationProps) => {
              return (
                <div className="bcc-table-pagination-controlPage">
                  <PaginationTotalStandalone {...props} {...paginationProps} />
                  <PaginationListStandalone {...props} {...paginationProps} />
                </div>
              );
            };
            return (
              <React.Fragment>
                <BootstrapTable
                  {...paginationTableProps}
                  hover={hover}
                  striped={striped}
                  condensed={condensed}
                  selectRow={selection}
                  classes={classNames(classes, {
                    [`${prefixCls}-condensed`]: condensed,
                    [`${prefixCls}-relaxed`]: relaxed,
                    [`${prefixCls}-striped`]: striped,
                    [`${prefixCls}-hover`]: hover,
                    [`${prefixCls}-selection`]: selection,
                    [`${prefixCls}-borderedHorizontal`]: borderedVertical ? false : true,
                  })}
                  wrapperClasses={classNames({
                    [`${prefixWrapperCls}-${shape.replace(/\s/g, '')}`]: shape,
                  })}
                  data={data}
                  columns={columns}
                  {...props}
                />
                <div className="bcc-table-pagination">
                  <SizePerPageDropdownStandalone {...paginationProps} />
                  <PaginantionList {...paginationProps} />
                </div>
              </React.Fragment>
            );
          }}
        </PaginationProvider>
      </div>
    );
  }

  return (
    <React.Fragment>
      <BootstrapTable
        hover={hover}
        striped={striped}
        condensed={condensed}
        selectRow={selection}
        classes={classNames(classes, {
          [`${prefixCls}-condensed`]: condensed,
          [`${prefixCls}-relaxed`]: relaxed,
          [`${prefixCls}-striped`]: striped,
          [`${prefixCls}-hover`]: hover,
          [`${prefixCls}-selection`]: selection,
          [`${prefixCls}-borderedHorizontal`]: borderedVertical ? false : true,
        })}
        wrapperClasses={classNames({
          [`${prefixWrapperCls}-${shape.replace(/\s/g, '')}`]: shape,
        })}
        data={data}
        columns={columns}
        {...props}
      />
    </React.Fragment>
  );
};

export default Table;
