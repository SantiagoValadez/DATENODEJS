 const { transcode } = require('buffer');
const fs = require('fs');
 const path = require('path');
const { blob } = require('stream/consumers');

 async function transcribeAudio(audioFilePath, apiKey) {
    try {
        // Ensure the directory exists
        if (!fs.existsSync(audioFilePath )) {
            throw new Error('El archivo de audio no existe');
        }

        const audioFile = fs.readFileSync(audioFilePath);
        const formData = new FormData();
        const blob = new Blob([audioFile]);

        formData.append('file', blob, path.basename(audioFilePath));
        formData.append('model', 'whisper-1');

        const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                },
            body: formData,
        })

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error en la solicitud: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        const transcription = data.text;

        const outputFilePath = path.join(path.dirname(audioFilePath), `${path.basename
            (audioFilePath, path.extname(audioFilePath))}_transcription.txt`);

        fs.writeFileSync(outputFilePath, transcription);
            console.log(`Transcripción guardada en: ${outputFilePath}`);
        return transcription;
            

        } catch (error) {
            console.log('Error durante la transcripción:', error.message);
            throw error;
        
        }

    }

    const audioFilePath = 'audio.mp3'; // Ruta al archivo de audio
    //const openaiApiKey = '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';

    transcribeAudio(audioFilePath, openaiApiKey)
        .then(transcription => {
            console.log('Transcripción completada con exito:');
            console.log(transcription);
        })
        .catch(error => {
            console.error('Error al transcribir el audio:', error);
        });