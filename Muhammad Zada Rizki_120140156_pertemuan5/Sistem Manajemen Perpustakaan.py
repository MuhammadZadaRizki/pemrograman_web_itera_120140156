from abc import ABC, abstractmethod
from typing import Dict, List, Optional

class LibraryItem(ABC):
    """Abstract base class untuk semua item perpustakaan"""
    
    def __init__(self, item_id: str, title: str):
        self._item_id = item_id  # protected attribute
        self._title = title      # protected attribute
        self._is_available = True
    
    @property
    def item_id(self) -> str:
        """Getter untuk item_id"""
        return self._item_id
    
    @property
    def title(self) -> str:
        """Getter untuk title"""
        return self._title
    
    @property
    def is_available(self) -> bool:
        """Getter untuk status ketersediaan"""
        return self._is_available
    
    @abstractmethod
    def display_info(self) -> None:
        """Method abstract untuk menampilkan informasi item"""
        pass
    
    def check_out(self) -> None:
        """Method untuk meminjam item"""
        if self._is_available:
            self._is_available = False
            print(f"Item '{self._title}' berhasil dipinjam")
        else:
            print(f"Item '{self._title}' sedang tidak tersedia")
    
    def return_item(self) -> None:
        """Method untuk mengembalikan item"""
        if not self._is_available:
            self._is_available = True
            print(f"Item '{self._title}' berhasil dikembalikan")
        else:
            print(f"Item '{self._title}' sudah tersedia")


class Book(LibraryItem):
    """Class untuk buku, mewarisi LibraryItem"""
    
    def __init__(self, item_id: str, title: str, author: str, pages: int):
        super().__init__(item_id, title)
        self.__author = author  # private attribute
        self.__pages = pages    # private attribute
    
    @property
    def author(self) -> str:
        """Getter untuk author"""
        return self.__author
    
    @property
    def pages(self) -> int:
        """Getter untuk jumlah halaman"""
        return self.__pages
    
    def display_info(self) -> None:
        """Implementasi method abstract untuk menampilkan info buku"""
        print(f"Buku: {self._title}")
        print(f"ID: {self._item_id}")
        print(f"Penulis: {self.__author}")
        print(f"Jumlah halaman: {self.__pages}")
        print(f"Status: {'Tersedia' if self._is_available else 'Dipinjam'}")
        print("-" * 30)


class Magazine(LibraryItem):
    """Class untuk majalah, mewarisi LibraryItem"""
    
    def __init__(self, item_id: str, title: str, issue: str, publisher: str):
        super().__init__(item_id, title)
        self.__issue = issue          # private attribute
        self.__publisher = publisher  # private attribute
    
    @property
    def issue(self) -> str:
        """Getter untuk nomor issue"""
        return self.__issue
    
    @property
    def publisher(self) -> str:
        """Getter untuk publisher"""
        return self.__publisher
    
    def display_info(self) -> None:
        """Implementasi method abstract untuk menampilkan info majalah"""
        print(f"Majalah: {self._title}")
        print(f"ID: {self._item_id}")
        print(f"Issue: {self.__issue}")
        print(f"Penerbit: {self.__publisher}")
        print(f"Status: {'Tersedia' if self._is_available else 'Dipinjam'}")
        print("-" * 30)
    
    def check_out(self) -> None:
        """Override method check_out dengan tambahan informasi khusus majalah"""
        print("Peringatan: Majalah tidak bisa diperpanjang masa pinjamnya")
        super().check_out()


class Library:
    """Class untuk mengelola koleksi perpustakaan"""
    
    def __init__(self):
        self.__items: Dict[str, LibraryItem] = {}  # private attribute
    
    def add_item(self, item: LibraryItem) -> None:
        """Menambahkan item baru ke perpustakaan"""
        if item.item_id in self.__items:
            print(f"Item dengan ID {item.item_id} sudah ada")
        else:
            self.__items[item.item_id] = item
            print(f"Item '{item.title}' berhasil ditambahkan")
    
    def display_all_items(self) -> None:
        """Menampilkan semua item di perpustakaan"""
        if not self.__items:
            print("Perpustakaan kosong")
            return
        
        print("\nDaftar Item di Perpustakaan:")
        print("=" * 50)
        for item in self.__items.values():
            item.display_info()
    
    def find_by_title(self, title: str) -> Optional[LibraryItem]:
        """Mencari item berdasarkan judul (case insensitive)"""
        title = title.lower()
        for item in self.__items.values():
            if title in item.title.lower():
                return item
        return None
    
    def find_by_id(self, item_id: str) -> Optional[LibraryItem]:
        """Mencari item berdasarkan ID"""
        return self.__items.get(item_id)
    
    def check_out_item(self, item_id: str) -> None:
        """Meminjam item berdasarkan ID"""
        item = self.find_by_id(item_id)
        if item:
            item.check_out()
        else:
            print(f"Item dengan ID {item_id} tidak ditemukan")
    
    def return_item(self, item_id: str) -> None:
        """Mengembalikan item berdasarkan ID"""
        item = self.find_by_id(item_id)
        if item:
            item.return_item()
        else:
            print(f"Item dengan ID {item_id} tidak ditemukan")


# Contoh penggunaan sistem perpustakaan
def main():
    library = Library()
    
    # Menambahkan beberapa item ke perpustakaan
    book1 = Book("B001", "Python Programming", "John Doe", 350)
    book2 = Book("B002", "Clean Code", "Robert Martin", 400)
    magazine1 = Magazine("M001", "National Geographic", "June 2023", "National Geographic Society")
    magazine2 = Magazine("M002", "Time", "May 2023", "Time USA")
    
    library.add_item(book1)
    library.add_item(book2)
    library.add_item(magazine1)
    library.add_item(magazine2)
    
    # Menampilkan semua item
    library.display_all_items()
    
    # Mencari item
    print("\nHasil pencarian 'Python':")
    found_item = library.find_by_title("Python")
    if found_item:
        found_item.display_info()
    else:
        print("Item tidak ditemukan")
    
    # Meminjam dan mengembalikan item
    print("\nMeminjam item:")
    library.check_out_item("B001")
    library.check_out_item("B001")  # Coba pinjam lagi
    library.check_out_item("M001")
    
    print("\nMengembalikan item:")
    library.return_item("B001")
    library.return_item("M001")
    
    # Menampilkan status terbaru
    print("\nStatus terbaru:")
    library.display_all_items()


if __name__ == "__main__":
    main()