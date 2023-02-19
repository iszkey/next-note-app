export const revalidateList = () => {
    fetch('/api/revalidate');
};

export const revalidateSingle = (id: string) => {
    fetch(`/api/revalidate/${id}`);
    // fetch(`api/revalidate/${id}`); の場合はエラーになるので注意
};
