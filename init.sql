--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2025-02-07 13:54:51

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 17182)
-- Name: cart; Type: TABLE; Schema: public; Owner: clothshop
--

CREATE TABLE public.cart (
    id integer NOT NULL,
    "idProduct" integer NOT NULL,
    quantity integer NOT NULL,
    "idUser" integer NOT NULL,
    "isValidate" boolean DEFAULT false NOT NULL
);


ALTER TABLE public.cart OWNER TO clothshop;

--
-- TOC entry 219 (class 1259 OID 17181)
-- Name: cart_id_seq; Type: SEQUENCE; Schema: public; Owner: clothshop
--

CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cart_id_seq OWNER TO clothshop;

--
-- TOC entry 4866 (class 0 OID 0)
-- Dependencies: 219
-- Name: cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: clothshop
--

ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;


--
-- TOC entry 218 (class 1259 OID 17172)
-- Name: product; Type: TABLE; Schema: public; Owner: clothshop
--

CREATE TABLE public.product (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    price numeric NOT NULL,
    stock integer NOT NULL,
    urlimage character varying NOT NULL
);


ALTER TABLE public.product OWNER TO clothshop;

--
-- TOC entry 217 (class 1259 OID 17171)
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: clothshop
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.product_id_seq OWNER TO clothshop;

--
-- TOC entry 4867 (class 0 OID 0)
-- Dependencies: 217
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: clothshop
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- TOC entry 216 (class 1259 OID 17116)
-- Name: user; Type: TABLE; Schema: public; Owner: clothshop
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    password character varying NOT NULL,
    role character varying DEFAULT 'user'::character varying NOT NULL
);


ALTER TABLE public."user" OWNER TO clothshop;

--
-- TOC entry 215 (class 1259 OID 17115)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: clothshop
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO clothshop;

--
-- TOC entry 4868 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: clothshop
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 4701 (class 2604 OID 17185)
-- Name: cart id; Type: DEFAULT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);


--
-- TOC entry 4700 (class 2604 OID 17175)
-- Name: product id; Type: DEFAULT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- TOC entry 4698 (class 2604 OID 17119)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 4860 (class 0 OID 17182)
-- Dependencies: 220
-- Data for Name: cart; Type: TABLE DATA; Schema: public; Owner: clothshop
--

COPY public.cart (id, "idProduct", quantity, "idUser", "isValidate") FROM stdin;
3	2	2	7	f
4	3	1	7	f
2	3	1	6	t
8	4	3	6	t
6	6	3	6	t
7	10	3	6	t
1	2	2	6	t
\.


--
-- TOC entry 4858 (class 0 OID 17172)
-- Dependencies: 218
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: clothshop
--

COPY public.product (id, name, description, price, stock, urlimage) FROM stdin;
5	Veste en Jean	Veste en jean bleu classique pour toutes saisons	59.99	10	https://images.unsplash.com/photo-1603252109303-004ec114d7b2
7	Pantalon Cargo	Pantalon cargo beige avec poches latérales	44.99	12	https://images.unsplash.com/photo-1603787101042-f0f4b4b33436
8	Blouson Cuir	Blouson en cuir véritable, coupe ajustée	129.99	8	https://images.unsplash.com/photo-1516762689617-e1cffcef479d
9	Montre Classique	Montre analogique élégante avec bracelet cuir	89.99	5	https://images.unsplash.com/photo-1517840545245-b491010a8af4
3	Sweat à Capuche	Sweat à capuche noir avec poche ventrale	39.99	15	https://images.unsplash.com/photo-1541099649105-f69ad21f3246
4	Chaussures de Sport	Chaussures de sport légères et confortables	69.99	0	https://images.unsplash.com/photo-1562183241-b937e95585a1
6	Chemise Carreaux	Chemise à carreaux rouge et noire, 100% coton	34.99	10	https://images.unsplash.com/photo-1536992266094-82803cfa8e3b
10	Casquette Noire	Casquette noire unisexe, ajustable	19.99	25	https://images.unsplash.com/photo-1560807707-8cc77767d783
2	Jean Slim	Jean slim bleu foncé pour un style tendance	49.99	20	https://images.unsplash.com/photo-1585386959984-a4155224a374
\.


--
-- TOC entry 4856 (class 0 OID 17116)
-- Dependencies: 216
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: clothshop
--

COPY public."user" (id, email, password, role) FROM stdin;
7	baptiste.boimard@gmail.com	$2b$10$cVBv2N7ScX3sYH2SEO/FDeqXkvoHiajeJr09gMspel5ESr97QyDXm	user
6	bouketin27@gmail.com	$2b$10$pNxv.4rp4k8gVFDV1y1AH.r9WnshMBiMLYFCDZFXuB6HoS3AwMtp2	admin
\.


--
-- TOC entry 4869 (class 0 OID 0)
-- Dependencies: 219
-- Name: cart_id_seq; Type: SEQUENCE SET; Schema: public; Owner: clothshop
--

SELECT pg_catalog.setval('public.cart_id_seq', 8, true);


--
-- TOC entry 4870 (class 0 OID 0)
-- Dependencies: 217
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: clothshop
--

SELECT pg_catalog.setval('public.product_id_seq', 14, true);


--
-- TOC entry 4871 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: clothshop
--

SELECT pg_catalog.setval('public.user_id_seq', 7, true);


--
-- TOC entry 4708 (class 2606 OID 17179)
-- Name: product PK_bebc9158e480b949565b4dc7a82; Type: CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);


--
-- TOC entry 4710 (class 2606 OID 17189)
-- Name: cart PK_c524ec48751b9b5bcfbf6e59be7; Type: CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY (id);


--
-- TOC entry 4704 (class 2606 OID 17124)
-- Name: user PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


--
-- TOC entry 4706 (class 2606 OID 17126)
-- Name: user UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


--
-- TOC entry 4711 (class 2606 OID 17190)
-- Name: cart FK_0f0adf0d6594e09f8a2e7fa311e; Type: FK CONSTRAINT; Schema: public; Owner: clothshop
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT "FK_0f0adf0d6594e09f8a2e7fa311e" FOREIGN KEY ("idProduct") REFERENCES public.product(id);


-- Completed on 2025-02-07 13:54:51

--
-- PostgreSQL database dump complete
--

