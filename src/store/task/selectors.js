import {createSelector} from "reselect";

export const getTasks = createSelector([(state) => state.tasks], tasks => {

    const list = Object.assign([], tasks.list).reverse()
    const totalRecords = tasks.list.length;
    const limit = tasks.limit;
    const currentPage = tasks.page;

    const startIndex = (currentPage - 1) * limit;
    const endIndex = Math.min(startIndex + limit, totalRecords);

    return {
        items: list.slice(startIndex, endIndex),
        totalPages: Math.ceil(totalRecords / limit),
        totalRecords,
        currentPage,
        limit,
    };
});
