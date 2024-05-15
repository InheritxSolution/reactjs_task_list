import {calcPagination, classNames} from "../components/helper";


const Pagination = ({currentPage, totalPages, onChangePages}) => {

    const pageItems = calcPagination(currentPage, totalPages)


    return <div className={"pagination--wrapper"}>
        <button className={"page-item txt-unicode"} title={"Previous"} disabled={currentPage === 1}
                onClick={() => onChangePages(currentPage - 1)}>«
        </button>
        {pageItems.map((page, i) => {
            const isEllipsis = isNaN(page)
            return <button
                key={i}
                className={classNames("page-item", {
                    active: page === currentPage,
                    ellipsis: isEllipsis
                })}
                disabled={isEllipsis}
                onClick={() => {
                    !isEllipsis && onChangePages(page)
                }}
            >{page}</button>
        })}
        <button className={"page-item txt-unicode"} title={"Next"} disabled={currentPage >= totalPages}
                onClick={() => onChangePages(currentPage + 1)}>»
        </button>
    </div>

}
export default Pagination