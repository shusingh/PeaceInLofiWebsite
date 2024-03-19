export interface TrackPlayerProps {
    trackData: {
      headers: {
        status: string;
        code: number;
        error_message: string;
        warnings: string;
        results_count: number;
      };
      results: {
        id: string;
        name: string;
        duration: number;
        artist_id: string;
        artist_name: string;
        artist_idstr: string;
        album_name: string;
        album_id: string;
        license_ccurl: string;
        position: number;
        releasedate: string;
        album_image: string;
        audio: string;
        audiodownload: string;
        prourl: string;
        shorturl: string;
        shareurl: string;
        waveform: string;
        image: string;
        audiodownload_allowed: boolean;
      }[];
    };
  }
  