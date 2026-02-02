pwd : O anki bulunan dosya yolunu gösterir.

mkdir : Klasör oluşturur.

touch : Dosya oluşturur.

rm -rf : Klasör siler.

rm : Dosya siler.

ls : Alt dalları gösterir.

cd : Gir.

cd .. : Çık.

clear : Terminal ekranını sil.

ls -la : Windows ve diğer sistemlerde gizli klasörleri de göstermeye yardımcı olur. 

---------------------------------------------------------------------------------------

git remote : Nerde olduğumuzu gösterir. 

git --version : Versiyonunu gösterir.

git config --global user.name "furkan" : Furkan olarak değiştirir adı.

git config --golbal user.email "glkfm@gmail.com" : Mail adresini değiştirir. 

git status : Klasörün Git ile bağlantılı olup olmadığını gösterir. 

git init : Klasörü git ile bağlantılı hale getirmeye yarar.

git add : Dosyaları gitin versiyon kontrolüne girmesini sağlar. Ama daha commit edilmemiş.

git commit : Dosyaları commit ediyor.

git commit -m "Bu bölümde yenileme yapıldı." : Commit edilirken not alınmasını sağlar.

git log : Bu komut ile commit edilmiş şeyleri görüyoruz. 

***
git commit -a : Tüm dosyayı hem ekleyip hem de commit edilmesini sağlar. 

git add . : Bu kod tüm dosyaları eklemeye yarar. 

-----------------------------------------------------------------------------------------

touch .gitignore : Burada gizli tutulmasını ve commit edilmesini istemediğimiz dosyaları atarak kendimizi güvenceye alırız. 
Oluşturduğumuz bu dosyanın içerisine gizlenmesini istediğimiz dosyayı atıyoruz. Koruma altına almış oluyoruz.


git switch master : Head'ı master üzerine getirir.

git branch 'Özellik' : Yeni bir branch açar.

git merge "Özellik" : Birleştirir. Yani branchları birleştirir.

------------------------------------------------------------------------------------------

git checkout <commit hashi> : İle eskiden kullanılan commit kullanılır.

git reset : Geri döndüğüm commitin önündeki commitleri siler ama içindekileri silmez taşır.

git rest --hard : Bu sefer komple içerikleri ile siliyor. 

git revert <commit hashi> : İstediğimiz commiti geri alıp devam edebiliyoruz. Silme ile aynı.


***
git rebase : Sürekli marge ettiğimizden loğlar kirlenebilir. Bunun çözümü için rebase kullanılır. rebase hepsini tek bir master gibi çizgide tutar ve tarihi değiştirebilir.

------------------------------------------------------------------------------------------


git remote add origin https://github.com/......../dosya.git

git breanch -M main -> gerek yok 

git push -u origin main(veya master)

//Giriş yaparız bundan sonrada artık her şey daha basit olacaktır.

------------------------------------------------------------------------------------------

git remote : Nerde olduğumuzu gösteriyor.

git push origin "branch ismi" : ekliyor.


------------------------------------------------------------------------------------------

git fetch "ad" "branch": Eğer github üzerindeki proje gitten önde ise bunu fixlemek için kullanılıyor.

git pull "branch" : Değişiklikleri hemen yapar. 

------------------------------------------------------------------------------------------

git clone <Dosya adı> : Githubdan projeyi bilgisayara indiriyor.




















