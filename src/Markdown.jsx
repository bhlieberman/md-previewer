import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import ReactMarkdown from 'react-markdown'

export const Markdown = () => {
    const [markdownText, setmarkdownText] = useState(`# Testing 1 2 3\n## an h2
    \n[Corona Samizdat](https://coronasamizdat.com)
    \n1. a list
    \n2. a second item
    \n\`\`\`
    \na code block
    \n\`\`\`
    \n\`var foo="bar"\`\n
    \n> a blockquote
    \n![A dark stock photo](https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e_400x400.jpg)
    \n**some strong text**
    `)
    const handleInput = (event) => {
        const markdown = event.target.value
        setmarkdownText(markdown)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Control id="editor"
                        as="textarea"
                        placeholder="Enter your markdown here"
                        style={{ height: '200px' }}
                        onChange={handleInput}
                        defaultValue={markdownText} />
                    <div id="preview">
                        <ReactMarkdown id="preview">
                            {markdownText}
                        </ReactMarkdown>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}