export function extractUserNameFirstLetter(userName){
    const nameParts=userName.split(' ').map(part=>part.charAt(0));
    return nameParts.join('');
}

export function messageRealTime(){
    const now=new Date();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    const currentTime=`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return currentTime;
  }

  export function autoResize (textarea, maxHeight = 100) {
    textarea.style.height = 'auto';
  
    if (textarea.scrollHeight > maxHeight) {
      textarea.style.height = `${maxHeight}px`;
      textarea.style.overflowY = 'scroll'
    } else {
      textarea.style.height = `${textarea.scrollHeight}px`;
      textarea.style.overflowY = 'hidden'
    }
  };
  export function resetTextarea(textarea) {
    console.log("reset");
    textarea.style.height = '50px'; // Set back to initial height (min-height)
    textarea.style.overflowY = 'hidden'; // Hide scrollbar again
  };