import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Photo {
  id: number;
  url: string;
  title: string;
}

const photos: Photo[] = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/projects/a3a09944-38c8-4675-ae44-da775e7c86e5/files/96a42b78-3403-429c-82dd-bcbc8a1b3fcf.jpg',
    title: 'Contemplation'
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/projects/a3a09944-38c8-4675-ae44-da775e7c86e5/files/ffcf135b-b303-468e-9e44-7d229ce50cce.jpg',
    title: 'Architecture'
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/projects/a3a09944-38c8-4675-ae44-da775e7c86e5/files/80da39c1-63c3-4593-8063-856183762bae.jpg',
    title: 'Portrait'
  },
  {
    id: 4,
    url: 'https://cdn.poehali.dev/files/6c7acea3-3e94-4da5-80c4-41a723e14bb5.jpg',
    title: 'Reflection'
  }
];

export default function Index() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            NOIR GALLERY
          </h1>
          <p className="mt-2 text-muted-foreground font-light tracking-wide">
            Монохромная эстетика в фотографии
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden bg-muted cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 grayscale"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white text-xl font-medium tracking-wide">
                    {photo.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Icon name="Eye" size={16} className="text-white/80" />
                    <span className="text-white/80 text-sm">Просмотр</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black border-none">
          {selectedPhoto && (
            <div className="relative">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="w-full h-auto grayscale"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h2 className="text-white text-3xl font-medium tracking-wide">
                  {selectedPhoto.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
