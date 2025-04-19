"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Product.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    customizable: false,
    idealFor: ["All"],
    occasion: ["All"],
    work: ["All"],
    fabric: ["All"],
    segment: ["All"],
    suitableFor: ["All"],
    rawMaterials: ["All"],
    pattern: ["All"],
  });
  const [isOpen, setIsOpen] = useState({
    customizable: false,
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [sortOption, setSortOption] = useState("recommended");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected filters (simplified logic)
  const filteredProducts = products.filter((product) => {
    return (
      (filters.customizable || true) &&
      (filters.idealFor.includes("All") ||
        filters.idealFor.some((option) =>
          product.idealFor?.includes(option)
        )) &&
      (filters.occasion.includes("All") ||
        filters.occasion.some((option) =>
          product.occasion?.includes(option)
        )) &&
      (filters.work.includes("All") ||
        filters.work.some((option) => product.work?.includes(option))) &&
      (filters.fabric.includes("All") ||
        filters.fabric.some((option) => product.fabric?.includes(option))) &&
      (filters.segment.includes("All") ||
        filters.segment.some((option) => product.segment?.includes(option))) &&
      (filters.suitableFor.includes("All") ||
        filters.suitableFor.some((option) =>
          product.suitableFor?.includes(option)
        )) &&
      (filters.rawMaterials.includes("All") ||
        filters.rawMaterials.some((option) =>
          product.rawMaterials?.includes(option)
        )) &&
      (filters.pattern.includes("All") ||
        filters.pattern.some((option) => product.pattern?.includes(option)))
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "recommended":
      default:
        // You might want to implement a better "recommended" algorithm
        // This is just random sorting as an example
        return 0.5 - Math.random();
    }
  });

  return (
    <div className={styles.productWrapper}>
      <div className={styles.topBar}>
        <span>
          {products.length} Items{" "}
          <button
            className={styles.hideFilter}
            onClick={() => setIsFilterVisible((prev) => !prev)}
          >
            {isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </span>

        <div className={styles.sortOptions}>
          <label className={styles.sortSelectWrapper}>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </label>
        </div>
      </div>

      {/* Filter Panel */}

      {isFilterVisible && (
        <div className={`${styles.filterPanel} ${isFilterVisible ? styles.visible : ''}`}>
          <div className={styles.filterSection}>
            {isOpen.customizable && (
              <label>
                <input
                  type="checkbox"
                  checked={filters.customizable}
                  onChange={(e) =>
                    setFilters({ ...filters, customizable: e.target.checked })
                  }
                />
                CUSTOMIZABLE
              </label>
            )}
          </div>

          <div
            className={`${styles.filterPanel} ${
              isFilterVisible ? styles.visible : styles.hidden
            }`}
          >
            <button
              className={styles.sectionToggle}
              onClick={() =>
                setIsOpen((prev) => ({ ...prev, idealFor: !prev.idealFor }))
              }
            >
              <span>IDEAL FOR</span>
              <span className={styles.arrow}>
                {isOpen.idealFor ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </button>
            {isOpen.idealFor && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.idealFor.includes("All")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        idealFor: e.target.checked ? ["All"] : [],
                      })
                    }
                  />
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.idealFor.includes("Men")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        idealFor: e.target.checked
                          ? [...filters.idealFor, "Men"]
                          : filters.idealFor.filter((item) => item !== "Men"),
                      })
                    }
                  />
                  Men
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.idealFor.includes("Women")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        idealFor: e.target.checked
                          ? [...filters.idealFor, "Women"]
                          : filters.idealFor.filter((item) => item !== "Women"),
                      })
                    }
                  />
                  Women
                </label>
              </>
            )}
          </div>

          <div className={styles.filterSection}>
            <button
              className={styles.sectionToggle}
              onClick={() =>
                setIsOpen((prev) => ({ ...prev, occasion: !prev.occasion }))
              }
            >
              <span>OCCASION</span>
              <span className={styles.arrow}>
                {isOpen.occasion ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </button>
            {isOpen.occasion && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.occasion.includes("All")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        occasion: e.target.checked ? ["All"] : [],
                      })
                    }
                  />
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.occasion.includes("Casual")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        occasion: e.target.checked
                          ? [...filters.occasion, "Casual"]
                          : filters.occasion.filter(
                              (item) => item !== "Casual"
                            ),
                      })
                    }
                  />
                  Casual
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.occasion.includes("Formal")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        occasion: e.target.checked
                          ? [...filters.occasion, "Formal"]
                          : filters.occasion.filter(
                              (item) => item !== "Formal"
                            ),
                      })
                    }
                  />
                  Formal
                </label>
              </>
            )}
          </div>

          <div className={styles.filterSection}>
            <button
              className={styles.sectionToggle}
              onClick={() =>
                setIsOpen((prev) => ({ ...prev, work: !prev.work }))
              }
            >
              <span>WORK</span>
              <span className={styles.arrow}>
                {isOpen.work ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </button>
            {isOpen.work && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.work.includes("All")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        work: e.target.checked ? ["All"] : [],
                      })
                    }
                  />
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.work.includes("Office")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        work: e.target.checked
                          ? [...filters.work, "Office"]
                          : filters.work.filter((item) => item !== "Office"),
                      })
                    }
                  />
                  Office
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.work.includes("Outdoor")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        work: e.target.checked
                          ? [...filters.work, "Outdoor"]
                          : filters.work.filter((item) => item !== "Outdoor"),
                      })
                    }
                  />
                  Outdoor
                </label>
              </>
            )}
          </div>

          <div className={styles.filterSection}>
            <button
              className={styles.sectionToggle}
              onClick={() =>
                setIsOpen((prev) => ({ ...prev, fabric: !prev.fabric }))
              }
            >
              <span>FABRIC</span>
              <span className={styles.arrow}>
                {isOpen.fabric ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </button>
            {isOpen.fabric && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.fabric.includes("All")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        fabric: e.target.checked ? ["All"] : [],
                      })
                    }
                  />
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.fabric.includes("Cotton")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        fabric: e.target.checked
                          ? [...filters.fabric, "Cotton"]
                          : filters.fabric.filter((item) => item !== "Cotton"),
                      })
                    }
                  />
                  Cotton
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.fabric.includes("Polyester")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        fabric: e.target.checked
                          ? [...filters.fabric, "Polyester"]
                          : filters.fabric.filter(
                              (item) => item !== "Polyester"
                            ),
                      })
                    }
                  />
                  Polyester
                </label>
              </>
            )}
          </div>

          <div className={styles.filterSection}>
            <button
              className={styles.sectionToggle}
              onClick={() =>
                setIsOpen((prev) => ({ ...prev, segment: !prev.segment }))
              }
            >
              <span>SEGMENT</span>
              <span className={styles.arrow}>
                {isOpen.segment ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </button>
            {isOpen.segment && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.segment.includes("All")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        segment: e.target.checked ? ["All"] : [],
                      })
                    }
                  />
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.segment.includes("Premium")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        segment: e.target.checked
                          ? [...filters.segment, "Premium"]
                          : filters.segment.filter(
                              (item) => item !== "Premium"
                            ),
                      })
                    }
                  />
                  Premium
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.segment.includes("Budget")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        segment: e.target.checked
                          ? [...filters.segment, "Budget"]
                          : filters.segment.filter((item) => item !== "Budget"),
                      })
                    }
                  />
                  Budget
                </label>
              </>
            )}
          </div>

          <div className={styles.filterSection}>
            <button
              className={styles.sectionToggle}
              onClick={() =>
                setIsOpen((prev) => ({
                  ...prev,
                  suitableFor: !prev.suitableFor,
                }))
              }
            >
              <span>SUITABLE FOR</span>
              <span className={styles.arrow}>
                {isOpen.suitableFor ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </button>
            {isOpen.suitableFor && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.suitableFor.includes("All")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        suitableFor: e.target.checked ? ["All"] : [],
                      })
                    }
                  />
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.suitableFor.includes("Adults")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        suitableFor: e.target.checked
                          ? [...filters.suitableFor, "Adults"]
                          : filters.suitableFor.filter(
                              (item) => item !== "Adults"
                            ),
                      })
                    }
                  />
                  Adults
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.suitableFor.includes("Kids")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        suitableFor: e.target.checked
                          ? [...filters.suitableFor, "Kids"]
                          : filters.suitableFor.filter(
                              (item) => item !== "Kids"
                            ),
                      })
                    }
                  />
                  Kids
                </label>
              </>
            )}
          </div>

          <div className={styles.filterSection}>
            <button
              className={styles.sectionToggle}
              onClick={() =>
                setIsOpen((prev) => ({
                  ...prev,
                  rawMaterials: !prev.rawMaterials,
                }))
              }
            >
              <span>RAW MATERIALS</span>
              <span className={styles.arrow}>
                {isOpen.rawMaterials ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </button>
            {isOpen.rawMaterials && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.rawMaterials.includes("All")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        rawMaterials: e.target.checked ? ["All"] : [],
                      })
                    }
                  />
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.rawMaterials.includes("Leather")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        rawMaterials: e.target.checked
                          ? [...filters.rawMaterials, "Leather"]
                          : filters.rawMaterials.filter(
                              (item) => item !== "Leather"
                            ),
                      })
                    }
                  />
                  Leather
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.rawMaterials.includes("Wool")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        rawMaterials: e.target.checked
                          ? [...filters.rawMaterials, "Wool"]
                          : filters.rawMaterials.filter(
                              (item) => item !== "Wool"
                            ),
                      })
                    }
                  />
                  Wool
                </label>
              </>
            )}
          </div>

          <div className={styles.filterSection}>
            <button
              className={styles.sectionToggle}
              onClick={() =>
                setIsOpen((prev) => ({ ...prev, pattern: !prev.pattern }))
              }
            >
              <span>PATTERN</span>
              <span className={styles.arrow}>
                {isOpen.pattern ? (
                  <FontAwesomeIcon icon={faAngleUp} />
                ) : (
                  <FontAwesomeIcon icon={faAngleDown} />
                )}
              </span>
            </button>
            {isOpen.pattern && (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.pattern.includes("All")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        pattern: e.target.checked ? ["All"] : [],
                      })
                    }
                  />
                  All
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.pattern.includes("Solid")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        pattern: e.target.checked
                          ? [...filters.pattern, "Solid"]
                          : filters.pattern.filter((item) => item !== "Solid"),
                      })
                    }
                  />
                  Solid
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={filters.pattern.includes("Patterned")}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        pattern: e.target.checked
                          ? [...filters.pattern, "Patterned"]
                          : filters.pattern.filter(
                              (item) => item !== "Patterned"
                            ),
                      })
                    }
                  />
                  Patterned
                </label>
              </>
            )}
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className={styles.container}>
        {sortedProducts && sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className={styles.image}
                />
              </div>
              <h3 className={styles.name}>{product.title}</h3>
              <p className={styles.priceSign}>
                Sign in or create an account to see pricing{" "}
                <span className={styles.wish}>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
              </p>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}
