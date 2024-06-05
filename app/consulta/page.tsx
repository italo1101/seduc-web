import React, { useState, useEffect } from "react";
import Table from "../components/tabela/tabela"; // Certifique-se de que o caminho está correto

interface Video {
  id: string;
  title: string;
  url: string;
  // Outras propriedades que o tipo Video possui
}

interface VideoBNCC extends Video {
  date: string;
  year: number;
}

const ConsultaPage: React.FC = () => {
  const [videos, setVideos] = useState<VideoBNCC[]>([]);

  useEffect(() => {
    // Fetch videos from API and ensure they have the correct type
    const fetchVideos = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videosbncc`);
      const data: VideoBNCC[] = await response.json();
      setVideos(data);
    };

    fetchVideos();
  }, []);

  const handleEdit = (id: string) => {
    // Lógica para editar o vídeo
  };

  return (
    <div>
      <button onClick={() => console.log("Consultar")}>
        Consultar
      </button>
      <Table videos={videos} onEdit={handleEdit} />
    </div>
  );
};

export default ConsultaPage;