import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { ProductCard } from "../../components";
import { IProduct } from "../../interfaces";
import { getProducts } from "../../services";
import { transformProducts } from "./helper";

const DATA_COUNT = 6;
const PAGE_NO = 1;

const ProductPage: React.FC = () => {
  const [pageNo, setPageNo] = useState(PAGE_NO);
  const [products, setProducts] = useState<IProduct[]>([]);

  const { data, isLoading } = useQuery<IProduct[]>(
    ["products", pageNo, DATA_COUNT],
    getProducts,
    {
      select: (res: any): IProduct[] => transformProducts(res.data),
    }
  );

  useEffect(() => {
    setProducts((prev) => [...prev, ...(data ?? [])]);
  }, [data]);

  const handleLoadMore = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div className="container-xxl">
      <div className="product-list">
        <div className="row mt-3 mb-3">
          <h1>Beers</h1>
        </div>
        <div className="row">
          {(products || [])?.map((product) => (
            <div key={product.name} className="col-lg-6 col-12 mt-4 mb-4">
              <ProductCard data={product} />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          {isLoading ? (
            <Spinner animation="border" variant="primary" />
          ) : (
            <button
              type="button"
              className="btn-link btn btn-load-more"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export { ProductPage };
