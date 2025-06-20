import './App.css';
import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from '../ImageModal/ImageModal';
import { MoonLoader } from 'react-spinners';
import { ErrorMessage } from '../ErrorMessage/ErrorMesage';
import Modal from 'react-modal';
import { fetchData } from '../../api/fun-api';
import { ImageData, ApiResponse } from '../../types'; 

Modal.setAppElement('#root');

function App(): JSX.Element {
  const [imgData, setImgData] = useState<ImageData[]>([]);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ImageData | null>(null);

  const openModalImage = (image: ImageData) => {
    document.body.style.overflow = 'hidden';
    setIsModalOpen(true);
    setModalData(image);
  };

  const closeModalImage = () => {
    document.body.style.overflow = 'visible';
    setIsModalOpen(false);
    setModalData(null);
  };

  const submitForm = (newQuery: string) => {
    if (!newQuery.trim()) return;
    setPage(1);
    setTotalPages(1);
    setIsError(false);
    setQuery(newQuery);
    setImgData([]);
  };

  const onChange = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (!query) return;

    async function fetchDataFromAPI() {
      try {
        setIsLoading(true);
        const data: ApiResponse = await fetchData(query, page);
        setImgData((prevImgData) => [...prevImgData, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error: any) {
        console.error('error:', error.message);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataFromAPI();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={submitForm} />

      {!isError ? (
        imgData.length > 0 ? (
          <ImageGallery photos={imgData} openModal={openModalImage} />
        ) : (
          query && !isLoading && (
            <p style={{ textAlign: 'center' }}>
              No results found for "{query}"
            </p>
          )
        )
      ) : (
        <ErrorMessage message={'Something went wrong...'} />
      )}

      {totalPages > page && !isLoading && <LoadMoreBtn onClick={onChange} />}

      {isLoading && (
        <MoonLoader
          cssOverride={{
            display: 'block',
            margin: '0 auto',
            borderColor: 'red',
          }}
        />
      )}

      {isModalOpen && modalData && (
        <ImageModal image={modalData} isClose={closeModalImage} isOpen={isModalOpen} />
      )}
    </>
  );
}

export default App;

