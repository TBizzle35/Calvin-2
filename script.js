// This is a simplified version of generating a profile picture using a 


2	+
name.
3	+
document.getElementById('generateBtn').addEventListener('click', 
4	+
function() {
5	+
    const name = document.getElementById('name').value.trim();
6	+
    
7	+
    if (!name) {
8	+
        alert('Please enter a name!');
9	+
        return;
10	+
    }
11	+
12	+
    // Simple placeholder image generation based on the input name.
13	+
    const hash = name.split('').reduce((hash, char) => hash + 
14	+
char.charCodeAt(0), 0);
15	+
    const avatarUrl = 
16	+
`https://api.dicebear.com/6.x/avataaars/svg?seed=${hash}`;
17	+
18	+
    // Display the generated image
19	+
    const img = document.getElementById('generatedImage');
20	+
    img.src = avatarUrl;
21	+
22	+
    // Show the result section
23	+
    document.getElementById('result').style.display = 'block';
24	+
});
25	+
document.getElementById('downloadBtn').addEventListener('click', 
26	+
function() {
27	+
    const img = document.getElementById('generatedImage');
28	+
    const link = document.createElement('a');
29	+
    link.href = img.src;
30	+
    link.download = 'generated-avatar.svg';
31	+
    link.click();
32	+
});
33	+
