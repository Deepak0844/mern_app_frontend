import { storage } from "./";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

//firebase image uploader
//it takes the file(images) and returns the file(images) as a url to display images and save in db
const firebaseFileUpload = ({
  file,
  setLoading,
  setProgress,
  setFieldValue,
}) => {
  setLoading(true);
  const storageRef = ref(storage, `userProfilePic/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      setProgress(progress);
    },
    (err) => {
      console.log(err);
      setLoading(false);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        setFieldValue("profilePic", url);
        setLoading(false);
      });
    }
  );
};

export default firebaseFileUpload;
