
export default function About() {
    return (
        <>
   <section
        style={{
          display: "flex",
          alignItems: "center",
          background: "#efefef",
          padding: 50,
          justifyContent: 'center'
        }}
      >

        <h1>Contact Us</h1>
      </section>
      <section
        style={{
          display: "flex",
          alignItems: "center",
          flex: '1 1 0px',
          padding: '50px 150px',
          gap: 10
        }}
      >
        <div style={{width: '100%'}}>
        <h1>Contact Us</h1>
          <p>We look forward to discussing a new project with you. 
            For inquiries or quotes, contact us via:
        </p>
        <div>
            Adress
        </div>
        <div>
            Phone
        </div>
        <div>
            Social Media
        </div>
        
        </div>
        <div style={{width: '100%'}}>
            <form style={{background: '#efefef', padding: 25}}>
                <div>

                <input type="text" placeholder="your name" />
                </div>
                <div>

<input type="text" placeholder="your email" />
</div>
            <div>

                <textarea name="mesage" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button>
                    Submit
                </button>
            </div>
            </form>
        </div>

      </section>
        </>
    )
}